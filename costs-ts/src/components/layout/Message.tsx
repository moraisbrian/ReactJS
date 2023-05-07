import { useEffect, useState } from 'react';
import './Message.scss';

function Message(props: MessageProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!props.msg) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [props.msg]);

    return (
        <>
            {visible && <div className={`message ${props.type}`}>{props.msg}</div>}
        </>
    );
}

type MessageProps = {
    type: string;
    msg: string;
}

export default Message;