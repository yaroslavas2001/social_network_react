import style from "./Post.module.css"
import React from "react"
import styleMain from "./../../../../../App.module.css"
const Post = (props: any) => {
  return (<div className={styleMain.content}>
    <img className={style.profile_img} src='https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg' alt="profile_img" />
    {props.message}
  </div>);
}

export default Post;
