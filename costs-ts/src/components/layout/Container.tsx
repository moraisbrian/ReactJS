import { ReactNode } from 'react';
import './Container.scss';

function Container(props: ContainerProps) {
    return <div className={`container ${props.customClass}`}>{props.children}</div>
}

type ContainerProps = {
    customClass?: string;
    children: JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
}

export default Container;