import React from 'react';

class MessageInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value,
        });
    }

    sendMessage(e) {
        if (this.state.message.length > 0) {
            this.props.sendMessage(this.state.message);
            this.setState({
                message: '',
            })
        }

        e.preventDefault();
    }

    render() {
        return (
            <form className="message-input" onSubmit={this.sendMessage}>
                <input id="message-submit" type="submit" value="Send" />
                <span>
                    <input type="text" value={this.state.message} onChange={this.handleChange} />
                </span>
            </form>
        );
    }
}

export default MessageInput;