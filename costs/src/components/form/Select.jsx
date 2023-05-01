import './Select.css';

function Select(props) {
    const { text, name, options, handleOnChange, value } = props;
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select onChange={handleOnChange} name={name} id={name} value={value || ''}>
                <option>
                    Selecione uma opção
                </option>
                {options.map(option => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;