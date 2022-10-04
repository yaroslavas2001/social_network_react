import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store';
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        distpatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
}
rerenderEntireTree(store);
store.subscribe(()=>{
  rerenderEntireTree(store)
})

//   addPost={store.addPost}  мы не передаем контекст, поэтому когда мы вызовем в компоненте контекст возмется из попследних props
//   addPost={store.addPost.bind(store)} мы передаем контекст стора, поэтому когда мы вызовем и вызов дойдет до state на месте this будет все в порядке

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
