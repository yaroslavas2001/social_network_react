import { addPost } from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux"
import { AppReducerType } from "../../../../redux/redux-store";

let mapStateToProps = (state:AppReducerType) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}
export default connect(mapStateToProps,
  { addPost }
)(MyPosts)
