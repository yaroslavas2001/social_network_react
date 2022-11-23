import style from "./Message.module.css"
import React from "react"
const Message = (probs: any) => {
  return (
    <div className={style.message}>
      {probs.message}
    </div>
  );
}
export default Message;
