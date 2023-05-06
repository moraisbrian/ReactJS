import { useEffect, useState } from 'react';
import './Message.css';

function Message(props) {
    const { type, msg } = props;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!msg) {
            setVisible(false);
            return;
        }

        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visible && <div className={`message ${type}`}>{msg}</div>}
        </>
    );
}

export default Message;