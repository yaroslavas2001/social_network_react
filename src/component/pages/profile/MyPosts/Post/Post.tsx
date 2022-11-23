import style from "./Post.module.css"
import React from "react"
const Post = (props: any) => {
  return (<>
    <img className={style.profile_img} src='https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg' alt="profile_img" />
    {props.message}
  </>);
}

export default Post;
