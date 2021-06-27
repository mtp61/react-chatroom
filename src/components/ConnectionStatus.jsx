import React from 'react';

class ConnectionStatus extends React.Component {
    render() {
        return (
            <div className="connection-status" style={{backgroundColor: this.props.connected ? 'green' : 'red'}}>
                {
                    this.props.connected
                        ? <p>connected</p>
                        : <p>not connected</p>
                }
            </div>
        );
    }
}

export default ConnectionStatus;