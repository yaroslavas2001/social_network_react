import s from "./MyPosts.module.css"
import Post from "./Post/Post"
const MyPosts = () => {
  let posts = [
    {id:0,name:"How are you?",like:3},
    {id:1,name:"It's my first post",like:0},    
  ]
  let postsElements= posts.map((el)=> <Post message={el.name} />)
  return (<div className="content">
   {postsElements}
  </div>);
}

export default MyPosts;
