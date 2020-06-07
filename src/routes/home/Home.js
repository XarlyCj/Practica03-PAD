import { h } from 'preact';
import { useState } from 'preact/hooks';
import '../../style/index.css';
import Button from '../../components/Button'
import Input from '../../components/Input'
import Task from '../../components/Tasks';
import md5 from 'crypto-js/md5'

const Home = () =>{
	const [addTask, setAddTask] = useState(false)
	const [stateValue, setStateValue] = useState('');
	const [renderState, setRenderState] = useState(false);
	let value = '';
	function toggleAddTask(){
		setStateValue('')
		setAddTask(!addTask);
	}

	function submitTask(e){
		e.preventDefault();
		if(stateValue != ""){
			console.log(stateValue);
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
				setAddTask(false)
				setStateValue('')
			}
		}
		else{
			alert("No se puede crear una tarea sin texto")
		}
	}

	function objectSize (obj) {
		let size = 0;
		for (let key in obj) {
			size++;
		}
		return size;
	}

	const tasksList = () => {
		if(renderState){
			setRenderState(!renderState)
			return [];
		}
		console.log("listing")
		let tasks = {};
		let taskComponents = [];
		tasks = localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {};
		for(let prop in tasks){
			taskComponents.push(
				<Task value={tasks[prop]} parentState={renderState} setParentState={setRenderState} />
			);
		}
		console.log(taskComponents)
		return taskComponents;
	}

	return(
		<div class="home">
			<h1>Organiza tu tiempo con <span>Task List</span></h1>
			<h2>Multiplica tu productividad: Crea tarea, guárdalas, edítalas y elimínalas cuando las hayas terminado.</h2>
			<Button onClick={() => toggleAddTask()}>Añadir tarea</Button>


			{addTask && (
				<form class="form" onSubmit={e => submitTask(e, value)}>
					<Input stateValue={stateValue} setStateValue={setStateValue} />
					<div class="button-container">
						<Button>Guardar</Button>
						<Button onClick={() => toggleAddTask()}>Cancelar</Button>
					</div>

				</form>
			)}

			{objectSize(localStorage.tasks != undefined ? JSON.parse(localStorage.tasks) : {}) > 0 && <h3>Tareas pendientes</h3>}
			
			{tasksList()}
			
		</div>
	);
} 

export default Home;
