import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReduxStore from './redux/redux-store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
{/* <React.StrictMode>  - возможно по этому 2 раза отрисовывал*/}

let rerenderEntireTree = (ReduxStore) => {
  root.render(
      <Provider store={ReduxStore}>
        <App
          // store={store}
          // state={store.getState()}
          // dispatch={store.dispatch.bind(store)}
        />
       </Provider>
   
  );
}
{/* </React.StrictMode> */}
rerenderEntireTree(ReduxStore);
// так как у connect своя перерисовка, то можно эту подписку убрать 
// store.subscribe(() => {
//   rerenderEntireTree(store)
// })

//   addPost={store.addPost}  мы не передаем контекст, поэтому когда мы вызовем в компоненте контекст возмется из попследних props
//   addPost={store.addPost.bind(store)} мы передаем контекст стора, поэтому когда мы вызовем и вызов дойдет до state на месте this будет все в порядке

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
