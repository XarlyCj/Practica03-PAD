import { h } from 'preact';
import { useState } from 'preact/hooks';
import Button from './Button'
import Input from './Input'
import md5 from 'crypto-js/md5'

const Task = ({value = '', parentState, setParentState}) =>{
	const [modifyTask, setModifyTask] = useState(false)
	const [stateValue, setStateValue] = useState(value);
	function toggleModifyTask(){
		setStateValue(value)
		setModifyTask(!modifyTask);
	}

	function submitTask(e){
		e.preventDefault();
		console.log("submitting")
		if(stateValue != ""){
			let tasks = {};
			let md5Text = "";
			let md5OldText = "";
			tasks = localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {};
			md5Text = md5(stateValue);
			if(Object.prototype.hasOwnProperty.call(tasks, md5Text)){
				alert("Esta tarea ya existe")
			}
			else{
				md5OldText = md5(value);
				if(Object.prototype.hasOwnProperty.call(tasks, md5OldText)){
					delete tasks[md5OldText];
				}
				tasks[md5Text] = stateValue;
				localStorage.tasks = JSON.stringify(tasks);
				value = stateValue
				setModifyTask(false)
				setParentState(!parentState)
			}
		}
		else{
			alert("No se puede crear una tarea sin texto")
		}
	}
	function deleteTask(e){
		e.preventDefault();
		console.log("deleting")
		let tasks = {};
		let md5OldText = "";
		tasks = localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {};
		md5OldText = md5(value);
		if(Object.prototype.hasOwnProperty.call(tasks, md5OldText)){
			delete tasks[md5OldText];
		}
		localStorage.tasks = JSON.stringify(tasks);
		setModifyTask(false)
		setParentState(!parentState)
	}
	return(
		<div class="task">
			
			{modifyTask ? 
				(<form class="form" onSubmit={e => submitTask(e)}>
					<Input stateValue={stateValue} setStateValue={setStateValue} />
					<div class="button-container">
						<Button onClick={(e) => deleteTask(e)}>Eliminar</Button>
						<Button type="submit">Guardar</Button>
						<Button onClick={() => toggleModifyTask()}>Cancelar</Button>
					</div>

				</form>)
				:
				(<Button onClick={() => toggleModifyTask()}>{stateValue}</Button>)
			}
	
		</div>
	);
} 

export default Task;
