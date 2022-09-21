import s from "./Message.module.css"

const Message = (probs) => {
  return (
    <div className={s.message}>
      {probs.message}
    </div>
  );
}
export default Message;
