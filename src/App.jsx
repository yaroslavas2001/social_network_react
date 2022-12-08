import { HashRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import HeaderContainer from './component/Header/HeaderContainer';
import Sidebar from "./component/Sidebar/sidebar";

import { setAuthUserData } from "./redux/auth-reducer.ts"
import { initializeApp } from "./redux/app-reducer.ts"

import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';

import { withRouter } from './hoc/withRouter';
import Preloader from './common/Preloader/Preloader.tsx';
import ReduxStore from './redux/redux-store';
import Cookies from 'js-cookie';
const DialogContainer = React.lazy(() => import('./component/pages/dialog/DialogContainer'))
const ProfileContainer = React.lazy(() => import('./component/pages/profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./component/pages/users/UsersContainer'))
const LoginContainer = React.lazy(() => import('./component/pages/login/LoginContainer'))
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
    let userId = Cookies.get("UserId")
    let userLogin = Cookies.get("UserLogin")
    let userEmail = Cookies.get("UserEmail")
    if (userId && userLogin && userEmail)
      this.props.setAuthUserData(Number(userId), userEmail, userLogin)
  }
  render() {
    if (!this.props.initialized)
      return <Preloader isFetching={!this.props.initialized} />

    return (
      <div className={style.app}  >
        <HeaderContainer />
        <div className={style.row}>
          <div className={style.nav}>
            <Sidebar />
          </div>
          <div className={style.content_block}>
            <Suspense fallback={<div><Preloader /></div>}>
              <Routes >
                {/* <Route path="/" render={()=><Profile  posts={posts}  />} />  не работает, не та версия*/}
                <Route path="/" element={<ProfileContainer />} />
                <Route path="/profile/:profileId" element={<ProfileContainer />} />
                <Route path="/profile/" element={<ProfileContainer />} />
                <Route path="/dialog/:dialogId" element={<DialogContainer />} />
                <Route path="/dialog/" element={<DialogContainer />} />
                <Route path="/users/*" element={<UsersContainer pageTitle='test' />} />
                <Route path="/login" element={<LoginContainer />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }

}
let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
let AppContainer = compose(
  connect(mapStateToProps, { initializeApp, setAuthUserData }),
  withRouter,)(App);;

let MainApp = (props) => {
  return (
    <Provider store={ReduxStore}>
      <HashRouter basename='/'>
        <AppContainer />
      </HashRouter>
    </Provider>
  )
}

export default MainApp