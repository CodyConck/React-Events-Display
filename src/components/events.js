import React from "react";

function Events() {
  // write some jsx to add functionality onclick
  return (
    <section>
      <div className="title">
        <h2>Schedule of Events</h2>
      </div>
      <article className="card">
        <div className="event">Event1</div>
        <div className="info-text">Some info about event1</div>
      </article>
      <article className="card">
        <div className="event">Event2</div>
        <div className="info-text">Some info about event2</div>
      </article>
      <article className="card">
        <div className="event">Event3</div>
        <div className="info-text">Some info about event3</div>
      </article>
    </section>
  );
}

export default Events;
