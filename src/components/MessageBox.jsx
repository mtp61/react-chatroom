import Message from './Message';

const MessageBox = (props) => {
    const messages = props.messages.map((message, index) =>  
        <Message message={message.message} key={index.toString()} />
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