import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = (props) => {
  let postsElements= props.posts.map((el,index)=> <Post key={index} message={el.name} />)
  return (<div className="content">
   {postsElements}
  </div>);
}

export default MyPosts;
