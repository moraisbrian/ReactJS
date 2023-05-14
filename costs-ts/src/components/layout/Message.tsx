import { useEffect, useState } from 'react';
import './Message.scss';
import If from '../../shared/If';

function Message(props: MessageProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!props.message) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [props.message]);

    return (
        <>
            <If condition={visible}>
                <div className={`message ${props.type}`}>{props.message}</div>
            </If>
        </>
    );
}

export enum MessageTypes {
    error = 'error',
    success = 'success'
}

type MessageProps = {
    type: string;
    message: string;
}

export default Message;