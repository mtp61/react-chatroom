

const Message = (props) => {
    return (
        <li className="message" key={props.index}>
            {props.message}
        </li>
    );
};

export default Message;