import React from 'react';
import { io } from "socket.io-client";
import '../styles/Chatroom.css';
import ConnectionStatus from './ConnectionStatus';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';
import MessageType from '../types/MessageType';

type ChatroomState = {
    connected: boolean,
    messages: MessageType[],
}

class Chatroom extends React.Component<{}, ChatroomState> {
    private socket: any;
    private timerId: any;
    
    constructor(props: {}) {
        super(props);

        this.state = {
            connected: false,
            messages: [],
        };
        
        this.sendMessage = this.sendMessage.bind(this);

        this.timerId = null;
        this.socket = null;
    }

    componentDidMount() {
        this.socket = io('10.0.0.210:3001');

        this.socket.on('message', (message: MessageType) => {
            console.log('received: ' + message);
            this.setState(prevState => ({
                    messages: [
                        ...prevState.messages, 
                        message,
                    ]
            }));
        });

        this.timerId = setInterval(
            () => this.setState({
                connected: this.socket.connected,
            }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    sendMessage(message: MessageType) {
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
    };
}

export default Chatroom;