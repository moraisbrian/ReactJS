import './Select.css';

function Select(props) {
    const { text, name, options, handleOnChange, value } = props;
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>
                    Selecione uma opção
                </option>
            </select>
        </div>
    );
}

export default Select;