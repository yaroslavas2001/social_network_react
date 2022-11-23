import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css"
import React from "react"
const DialogItem = (probs:any) => {
  let path = "/dialog/" + probs.id
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{probs.name}</NavLink>
    </div>
  );
}
export default DialogItem;
