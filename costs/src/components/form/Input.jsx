import './Input.css';

function Input(props) {
    const { type, text, name, placeholder, handleOnChange, value } = props;
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange} 
                value={value}
            />
        </div>
    );
}

export default Input;