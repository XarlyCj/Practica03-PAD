import { h } from 'preact';
import '../style/index.css';

const Button = ({children, onClick, type}) => (
	<button class="button" type={type} onClick={onClick}>
        {children}
    </button>

);

export default Button;
