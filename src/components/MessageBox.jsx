import React from 'react';
import Message from './Message';

class MessageBox extends React.Component {
    render() {
        const messages = this.props.messages.map((message, index) =>  
            <Message message={message.message} key={index.toString()} />
        );

        return (
            <div className="message-box">
                <ul>
                    {messages}
                </ul>
            </div>
        );
    }
}

export default MessageBox;