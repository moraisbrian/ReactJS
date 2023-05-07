import './SubmitButton.scss';

function SubmitButton(props: SubmitButtonProps) {
    const { text } = props;
    return (
        <div>
            <button className="btn">{text}</button>
        </div>
    );
}

type SubmitButtonProps = {
    text: string;
}

export default SubmitButton;