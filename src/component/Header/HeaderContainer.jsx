import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from "./../../redux/auth-reducer"
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
      if (response.data.resultCode === 0) {
        console.log("response",response.data)
        let data = response.data.data
        this.props.setAuthUserData(data.id, data.email, data.login)
      }
    })
  }
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth:state.auth.isAuth
  }
}
export default connect(mapStateToProps,
  {
    setAuthUserData

  })(HeaderContainer);
