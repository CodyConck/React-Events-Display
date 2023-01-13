import Accordion from "react-bootstrap/Accordion";

function Events() {
  return (
    <Accordion defaultActiveKey="0">
      <h2 className="title">Schedule of Events</h2>
      <Accordion.Item eventKey="0">
        <Accordion.Header id="center-text">Event #1</Accordion.Header>
        <Accordion.Body>A bunch of info about the event 1</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Event #2</Accordion.Header>
        <Accordion.Body>A bunch of info about event 2</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Events;
