import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css"
const DialogItem = (probs) => {
  let path = "/dialog/" + probs.id
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{probs.name}</NavLink>
    </div>
  );
}
export default DialogItem;
