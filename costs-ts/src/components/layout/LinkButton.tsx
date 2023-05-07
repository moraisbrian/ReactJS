import './LinkButton.scss';
import { Link } from 'react-router-dom';

function LinkButton(props: LinkButtonProps) {
    return (
        <Link className="btn" to={props.to}>
            {props.text}
        </Link>
    );
}

type LinkButtonProps = {
    to: string;
    text: string;
}

export default LinkButton;