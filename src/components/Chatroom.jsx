import React from 'react';
import { io } from "socket.io-client";
import '../styles/Chatroom.css';
import ConnectionStatus from './ConnectionStatus';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            connected: false,
            messages: [],
        };

        this.sendMessage = this.sendMessage.bind(this);
    }

    componentDidMount() {
        this.socket = io('10.0.0.210:3001');

        this.socket.on('message', message => {
            console.log('received: ' + message);
            this.setState({
                messages: [
                    ...this.state.messages, 
                    { message: message },
                ],
            });
        });

        this.timerId = setInterval(
            () => this.setState({
                connected: this.socket.connected,
            }),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    sendMessage(message) {
        this.socket.emit('message', message);
    }

    render() {
        return (
            <div className="chatroom">
                <ConnectionStatus connected={this.state.connected} />
                <MessageBox messages={this.state.messages} />
                <MessageInput sendMessage={this.sendMessage} />
            </div>
        );
    }
}

export default Chatroom;