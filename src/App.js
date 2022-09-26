import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from "./component/Header/header"
import Sidebar from "./component/Sidebar/sidebar";
import Dialog from "./pages/dialog/Dialog";
import Profile from "./pages/profile/Profile";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Headers />
        <div className='row'>
          <Sidebar />
          <div className='content'>
            <Routes>
              {/* <Route path="/" render={()=><Profile  posts={posts}  />} />  не работает, не та версия*/}
              <Route path="/" element={<Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />} />
              <Route path="/profile"
                element={<Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />} />
              <Route path="/dialog"
                element={<Dialog dialogsPage={props.state.dialogsPage} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
