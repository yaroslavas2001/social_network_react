import { addPost, PostType ,deletePost,updatePost} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux"
import { AppReducerType } from "../../../../redux/redux-store";
import { ProfileType } from "../../../../api/api";

type MapStateToPropsType = {
  newPostText: string
  posts: Array<PostType>
  profile: ProfileType
  isDarkTheme:boolean
}
type MapDispatchToPropsType = {
  addPost: (newPostText: string) => void
  deletePost:(postId:number)=>void
  updatePost: (idPost: number, newText: string) => void
}
let mapStateToProps = (state: AppReducerType): MapStateToPropsType => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    isDarkTheme:state.app.isDarkTheme
  }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, { addPost ,deletePost,updatePost})(MyPosts)
