import './Select.css';

function Select(props: SelectProps) {
    const { text, name, options, handleOnChange, value } = props;
    return (
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select onChange={handleOnChange} name={name} id={name} value={value || ''}>
                <option>
                    Selecione uma opção
                </option>
                {options.map((option: any) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    );
}

type SelectProps = {
    text?: string;
    name?: string;
    options: any[];
    handleOnChange?: React.ChangeEventHandler<HTMLSelectElement>;
    value?: string;
}

export default Select;