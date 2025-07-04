// Message.js
import { Component } from 'react';

export default Message = () => {
  return (
    <div>
      <h1>{this.props.msgDetails.msg}</h1>
      <p>{this.props.msgDetails.from}</p>
      <p>{this.props.msgDetails.to}</p>
    </div>
  );
}
