import HandIcon from './HandIcon';
import './HandButton.css';

function HandButton({ value,onClick }) {
    const handleClick = () => onClick(value);
        return (
            <button className='HandButton' onClick={handleClick}>
                <HandIcon class='HandButton-icon' value={ value } />
            </button>
        );
}

export default HandButton;