import React from 'react';

function Content(props) {
  return (
    <section className={`feature ${props.side}`}>
      <a
        href={props.link}
        className={`image icon ${props.icon}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.image} className="image fit" alt="" />
      </a>
      <div className="content" style={{ marginTop: `-45px` }}>
        <h3>{props.title}</h3>
        <h4 style={{ color: 'orange' }}>{props.meetingTime}</h4>
        <p>{props.body}</p>
      </div>
    </section>
  );
}

export default Content;
