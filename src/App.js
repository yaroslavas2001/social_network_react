import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './component/Header/HeaderContainer';
import Sidebar from "./component/Sidebar/sidebar";
import DialogContainer from './component/pages/dialog/DialogContainer';
import ProfileContainer from './component/pages/profile/ProfileContainer';
import UsersContainer from './component/pages/users/UsersContainer';
import LoginContainer from "./component/pages/login/LoginContainer"
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <HeaderContainer />
        <div className='row'>
          <Sidebar />
          <div className='content_block'>
            <div className='content'>
              <Routes >
                {/* <Route path="/" render={()=><Profile  posts={posts}  />} />  не работает, не та версия*/}
                <Route path="/" element={<ProfileContainer />} />
                <Route path="/profile/:profileId" element={<ProfileContainer />} />
                <Route path="/profile/" element={<ProfileContainer />} />

                <Route path="/dialog/:dialogId" element={<DialogContainer />} />
                <Route path="/dialog/" element={<DialogContainer />} />

                <Route path="/users/*" element={<UsersContainer />} />
                <Route path="/login" element={<LoginContainer />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
