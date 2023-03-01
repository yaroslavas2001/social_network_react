import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { logoutMe } from "../../redux/auth-reducer"
import { changeTheme } from "../../redux/app-reducer"
import { AppReducerType } from '../../redux/redux-store';
type MapStateToPropsType = {
  login: string
  isAuth: boolean
  isDarkTheme:boolean
}
type MapDispatchToPropsType = {
  logoutMe: () => void
  changeTheme: (theme: boolean) => void
}
type propsType = MapStateToPropsType & MapDispatchToPropsType
class HeaderContainer extends React.Component<propsType> {
  render() {
    return <Header
      logoutMe={this.props.logoutMe}
      login={this.props.login}
      isAuth={this.props.isAuth}
      isDarkTheme={this.props.isDarkTheme}
      changeTheme={this.props.changeTheme}
    />
  }
}
let mapStateToProps = (state: AppReducerType): MapStateToPropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    isDarkTheme:state.app.isDarkTheme
  }
}
export default connect<MapStateToPropsType, MapDispatchToPropsType>
  (mapStateToProps, { logoutMe, changeTheme })(HeaderContainer);
