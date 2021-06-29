

const ConnectionStatus = (props) => {
    return (
        <div className="connection-status" style={{backgroundColor: props.connected ? 'green' : 'red'}}>
            {
                props.connected
                    ? <p>connected</p>
                    : <p>not connected</p>
            }
        </div>
    );
};

export default ConnectionStatus;