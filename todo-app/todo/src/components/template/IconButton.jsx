import { If } from "./If";

export function IconButton(props) {
    return (
        <If test={!props.hide}>
            <button className={'btn btn-' + props.color} onClick={props.onClick} style={{ width: '45px'}}>
                <i className={'fa-solid fa-' + props.icon}></i>
            </button>
        </If>
    );
}