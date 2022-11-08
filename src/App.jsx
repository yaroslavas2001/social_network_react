import { Route, Routes } from 'react-router-dom';
import style from './App.module.css';
import HeaderContainer from './component/Header/HeaderContainer';
import Sidebar from "./component/Sidebar/sidebar";
import DialogContainer from './component/pages/dialog/DialogContainer';
import ProfileContainer from './component/pages/profile/ProfileContainer';
import UsersContainer from './component/pages/users/UsersContainer';
import LoginContainer from "./component/pages/login/LoginContainer"
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './hoc/withRouter';
import { initializeApp } from "./redux/app-reducer"
import Preloader from './common/Preloader/Preloader';
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized)
      return <Preloader isFetching={!this.props.initialized} />
    return (
      <div className={style.app}>
        <HeaderContainer />
        <div className={style.row}>
          <Sidebar />
          <div className={style.content_block}>
            <div className={style.content}>
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
export default compose(

  connect(mapStateToProps, { initializeApp }),
  withRouter,
)(App);;
