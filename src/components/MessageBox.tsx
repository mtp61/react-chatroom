import Message from './Message';
import MessageType from '../types/MessageType';

type MessageBoxProps = {
    messages: MessageType[],
}

const MessageBox = (props: MessageBoxProps) => {
    const messages = props.messages.map((message, index) =>  
        <Message message={message} key={index.toString()} />
    );

    return (
        <div className="message-box">
            <ul>
                {messages}
            </ul>
        </div>
    );
};

export default MessageBox;