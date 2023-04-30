import './SubmitButton.css';

function SubmitButton(props) {
    const { text } = props;
    return (
        <div>
            <button className="btn">{text}</button>
        </div>
    );
}

export default SubmitButton;