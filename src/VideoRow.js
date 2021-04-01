import React from 'react'
import "./VideoRow.css";

function VideoRow(props) {
    return (
        <div className="VideoRow">
    <img src={props.image} alt="jbjkdb" /> 
    <div className="VideoRow__text">
      <h3>{props.title}</h3>
      <p className="VideoRow__headline">{props.channel} •
      <span className="VideoRow__subs">
      <span className="VideoRow__subsNo">{props.subs}</span> subscribers
      </span>  {props.views} views • {props.timestamp} </p>
      <p className="VideoRow__description">{props.description}</p>
    </div>
        </div>
    )
}

export default VideoRow
