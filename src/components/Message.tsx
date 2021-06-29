import MessageType from '../types/MessageType';

type MessageProps = {
    key: string,
    message: MessageType,
};

const Message = (props: MessageProps) => {
    return (
        <li className="message" key={props.key}>
            {props.message.message}
        </li>
    );
};

export default Message;