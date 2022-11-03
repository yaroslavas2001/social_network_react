import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutMe ,authMe} from "./../../redux/auth-reducer"
class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe()
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
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps,
  { logoutMe ,authMe})(HeaderContainer);
