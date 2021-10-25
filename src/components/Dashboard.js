import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RoomButton from './RoomButton';

export default function Dashboard() {
    return (
        <>
        <br />
        <Container>
            <Row>
                <RoomButton room={1} styles="success" />
                <RoomButton room={2} styles="success" />
                <RoomButton room={3} styles="warning" />
                <RoomButton room={4} styles="warning" />
                <RoomButton room={5} styles="success" />
                <RoomButton room={6} styles="success" />
                <RoomButton room={7} styles="danger" />
                <RoomButton room={8} styles="success" />
            </Row>
            <Row>
                <RoomButton room={9} styles="success" />
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <RoomButton room={10} styles="success" />
            </Row>
            <Row>
                <RoomButton room={11} styles="success" />
                <Col></Col>
                <RoomButton room={12} styles="success" />
                <RoomButton room={13} styles="success" />
                <RoomButton room={14} styles="success" />
                <RoomButton room={15} styles="success" />
                <Col></Col>
                <RoomButton room={16} styles="success" />
            </Row>
        </Container>
        </>
    );
}