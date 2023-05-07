import './Container.scss';

function Container(props: ContainerProps) {
    return <div className={`container ${props.customClass}`}>{props.children}</div>
}

type ContainerProps = {
    customClass?: string;
    children: any;
}

export default Container;