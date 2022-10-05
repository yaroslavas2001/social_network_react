import React from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../redux/store-context";
import MyPosts from "./MyPosts";
import {connect} from "react-redux"

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//       (store) => {
//         let state = store.getState()
//         let addPost = () => {
//           store.dispatch(addPostCreator())
//         }
//         let onPostChange = (text) => {
//           let action = updateNewPostTextCreator(text)
//           store.dispatch(action)
//         }
//         return <MyPosts
//           newPostText={state.profilePage.newPostText}
//           posts={state.profilePage.posts}
//           updateNewPostText={onPostChange}
//           addPost={addPost}
//         />
//       }

//     }

//     </StoreContext.Consumer>
//   );
// }
let mapStateToProps = (state) => {
  return {
    newPostText:state.profilePage.newPostText,
    posts:state.profilePage.posts
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostCreator()) },
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text)
      dispatch(action)
    }
  }
}
const SuperMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default SuperMyPostContainer;
