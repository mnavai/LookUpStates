import React from 'react';
import './Message.css';

export default function Message(props) {
    const badge = +props.unread 
      ? <div className="unread_count badge">{props.unread}</div>
      : null;
    return (
      <div className="Message">
          {props.name}
          {badge}
      </div>

 );
}