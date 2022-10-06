import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from "./component/Header/header"
import Sidebar from "./component/Sidebar/sidebar";
import DialogContainer from './pages/dialog/DialogContainer';
import Profile from "./pages/profile/Profile";
import UsersContainer from './pages/users/UsersContainer';
const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Headers />
        <div className='row'>
          <Sidebar />
          <div className='content'>
            <Routes>
              {/* <Route path="/" render={()=><Profile  posts={posts}  />} />  не работает, не та версия*/}
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialog" element={<DialogContainer />} />
              <Route path="/users" element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
