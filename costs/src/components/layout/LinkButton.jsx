import './LinkButton.css';
import { Link } from 'react-router-dom';

function LinkButton(props) {
    return (
        <Link className="btn" to={props.to}>
            {props.text}
        </Link>
    );
}

export default LinkButton;