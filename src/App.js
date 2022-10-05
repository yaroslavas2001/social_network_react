import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from "./component/Header/header"
import Sidebar from "./component/Sidebar/sidebar";
import DialogContainer from './pages/dialog/DialogContainer';
import Profile from "./pages/profile/Profile";
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
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
