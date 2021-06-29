import { useState, useCallback } from 'react';

type MessageInputProps = {
    sendMessage: Function,
}

const MessageInput = (props: MessageInputProps) => {
    const [message, setMessage] = useState('');

    const handleChange = useCallback((e) => {
        setMessage(e.target.value);
    }, []);

    const sendMessage = useCallback((e) => {        
        if (message.length > 0) {
            props.sendMessage({
                message: message
            });
            setMessage('');
        }

        e.preventDefault();
    }, [message, props]);

    return (
        <form className="message-input" onSubmit={sendMessage}>
            <input id="message-submit" type="submit" value="Send" />
            <span>
                <input type="text" value={message} onChange={handleChange} />
            </span>
        </form>
    );
};

export default MessageInput;