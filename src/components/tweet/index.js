import React from "react";
import "./tweet.css";
/**
 * Props:
 * profile_pic
 * username
 * text
 * datetime
 */
export default props => (
  <article className="tweet_container">
    <div className="header">
      <img className="pic" src={props.profile_pic} alt={props.username} />
      <p className="username">{props.username}</p>
    </div>
    <p className="text">{props.text}</p>
    <small className="datetime">{props.datetime}</small>
  </article>
);
