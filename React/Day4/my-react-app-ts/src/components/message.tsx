import type { FC } from "react";

type MessageModel = {
  msg: string;
  from: string;
  to: string
};

type MessageType = {
  messagedetails: MessageModel;
};

const Message:FC<MessageType> = (props :MessageType) => {
  return (
    <div> 
      <h1>{props.messagedetails.msg}</h1>
    </div>
  )
}

export default Message
