import React from 'react';

function Content(props) {
  return (
    <section className={`feature ${props.side}`}>
      <a href={props.link} className={`image icon ${props.icon}`}>
        <img src={props.image} className="image fit" alt="" />
      </a>
      <div className="content">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div>
    </section>
  );
}

export default Content;
