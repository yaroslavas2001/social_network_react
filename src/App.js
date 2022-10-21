import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from "./component/Header/header"
import Sidebar from "./component/Sidebar/sidebar";
import DialogContainer from './pages/dialog/DialogContainer';
import ProfileContainer from './pages/profile/ProfileContainer';
import UsersContainer from './pages/users/UsersContainer';
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Headers />
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
                <Route path="/users/*" element={<UsersContainer />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
