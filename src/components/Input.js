import { h } from 'preact';

const Input = ({stateValue, setStateValue}) =>{
    
	return(
		<input class="input" type="text" placeholder="Escribe tu tarea" onChange={e => setStateValue(e.target.value)} value={stateValue} />

	);
} 

export default Input;