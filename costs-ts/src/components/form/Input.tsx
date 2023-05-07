import './Input.scss';

function Input(props: InputProps) {
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

type InputProps = {
    type?: string;
    text?: string;
    name?: string;
    placeholder?: string;
    handleOnChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
}

export default Input;