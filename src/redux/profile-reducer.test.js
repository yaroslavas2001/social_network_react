import profileReducer, { addPost, deletePost } from "./profile-reducer.ts"
let state = {
  posts: [
    { id: 0, name: "How are you?", like: 3 },
    { id: 1, name: "It's my first post", like: 0 },
  ],
}

test('length of post should be incremented', () => {
  // 1. test data
  let action = addPost("test")
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expection
  expect(newState.posts.length).toBe(3)
});
test('message of new post should be correct', () => {
  // 1. test data

  let action = addPost("test")
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expection
  expect(newState.posts[2].name).toBe("test")
});
test('after deleting length of messages sould be decrement', () => {
  // 1. test data

  let action = deletePost(1)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expection
  expect(newState.posts.length).toBe(1)
});