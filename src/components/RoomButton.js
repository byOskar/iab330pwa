import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class RoomButton extends Component {
    render() {
        return (
            <Col>
                <Alert variant={this.props.styles}>
                    <Button variant={this.props.styles}>
                        Room {this.props.room}
                    </Button>
                </Alert>
            </Col>
        );
    }
}

export default RoomButton;