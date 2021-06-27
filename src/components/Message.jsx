import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <li className="message" key={this.props.index}>
                {this.props.message}
            </li>
        );
    }
}

export default Message;