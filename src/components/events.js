import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Events() {
  return (
    <Accordion defaultActiveKey="0">
      <h2 className="title">Schedule of Events</h2>
      <Card id="event-card">
        <Card.Body>
          <Accordion.Item id="accord-item" eventKey="0">
            <Accordion.Header>Event #1</Accordion.Header>
            <Accordion.Body>A bunch of info about the event 1</Accordion.Body>
          </Accordion.Item>
        </Card.Body>
        <Card.Body>
          <Accordion.Item id="accord-item" eventKey="1">
            <Accordion.Header>Event #2</Accordion.Header>
            <Accordion.Body>A bunch of info about event 2</Accordion.Body>
          </Accordion.Item>
        </Card.Body>
      </Card>
    </Accordion>
  );
}

export default Events;
