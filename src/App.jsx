import { HashRouter, Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import HeaderContainer from './component/Header/HeaderContainer';
import Sidebar from "./component/Sidebar/sidebar";


// import DialogContainer from './component/pages/dialog/DialogContainer';
// import ProfileContainer from './component/pages/profile/ProfileContainer';
// import UsersContainer from './component/pages/users/UsersContainer';
// import LoginContainer from "./component/pages/login/LoginContainer"
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter';
import { initializeApp } from "./redux/app-reducer.ts"
import Preloader from './common/Preloader/Preloader';
import ReduxStore from './redux/redux-store';
const DialogContainer = React.lazy(() => import('./component/pages/dialog/DialogContainer'))
const ProfileContainer = React.lazy(() => import('./component/pages/profile/ProfileContainer'))
const UsersContainer = React.lazy(() => import('./component/pages/users/UsersContainer'))
const LoginContainer = React.lazy(() => import('./component/pages/login/LoginContainer'))
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized)
      return <Preloader isFetching={!this.props.initialized} />
    return (
      <div className={style.app}  >
        <HeaderContainer />
        <div className={style.row}>
          <Sidebar />
          <div className={style.content_block}>
            <div className={style.content}>
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
      </div>
    );
  }

}
let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    // email: state.auth.email,
    // login: state.auth.login,
    // isFetching: state.auth.isFetching,
    // isAuth: state.auth.isAuth
  }
}
let AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
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