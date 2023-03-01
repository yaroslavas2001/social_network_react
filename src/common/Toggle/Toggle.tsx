import style from './headerColorSmall.module.css'
import React from "react"
import { join } from '../../utils/function';
type props = {
  checked: boolean
  check: () =>void
}
const Toggle = (props: props) => {
  return (
    <div className={style.toggleWrapper} onClick={props.check}>
      <input type="checkbox" checked={props.checked} onChange={() => { }} className={style.dn} id="dn" />
      <label form='dn' className={style.toggle}>
        <span className={style.toggle__handler}>
          <span className={join([style.crater, style.crater__1])}></span>
          <span className={join([style.crater, style.crater__2])}></span>
          <span className={join([style.crater, style.crater__3])}></span>
        </span>
        <span className={join([style.star, style.star__1])}></span>
        <span className={join([style.star, style.star__2])}></span>
        <span className={join([style.star, style.star__3])}></span>
        <span className={join([style.star, style.star__4])}></span>
        <span className={join([style.star, style.star__5])}></span>
        <span className={join([style.star, style.star__6])}></span>
      </label>
    </div>
  );
}

export default Toggle;
