import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutMe } from "../../redux/auth-reducer"
import { AppReducerType } from '../../redux/redux-store';
type MapStateToPropsType = {
  login: string
  isAuth: boolean
}
type MapDispatchToPropsType = {
  logoutMe: () => void
}
type propsType = MapStateToPropsType & MapDispatchToPropsType
class HeaderContainer extends React.Component<propsType> {
  render() {
    return <Header logoutMe={this.props.logoutMe}
      login={this.props.login}
      isAuth={this.props.isAuth}
    />
  }
}
let mapStateToProps = (state: AppReducerType): MapStateToPropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, { logoutMe })(HeaderContainer);
