import profileReducer, { addPost } from "./profile-reducer"


test('length of post should be incremented', () => {
  // 1. test data
  let state = {
    posts: [
      { id: 0, name: "How are you?", like: 3 },
      { id: 1, name: "It's my first post", like: 0 },
    ],
  }
  let action = addPost("test")
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expection
 expect(newState.posts.length).toBe(3) 
});
