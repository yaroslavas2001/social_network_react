import React from "react";
import Login from "./Login";
import { logintMe, getCapchaUrl } from "../../../redux/auth-reducer"
import { compose } from "redux";
import { connect } from "react-redux"
import { AppReducerType } from "../../../redux/redux-store";
type MapStateToPropsType = {
    isAuth: boolean
    capchaUrl: string
    isWaitingCapcha: boolean
    isShowCapcha: boolean
    isDarkTheme: boolean
    errorLogin: string
}
type MapDispatchToPropsType = {
    getCapchaUrl: () => void
    logintMe: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type propsType = MapStateToPropsType & MapDispatchToPropsType
class LoinContainer extends React.Component<propsType> {
    componentDidMount() {
        this.props.getCapchaUrl()
    }
    render() {
        return (<Login {...this.props} />)
    }
}
let mapStateToProps = (state: AppReducerType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        capchaUrl: state.auth.capchaUrl,
        isWaitingCapcha: state.auth.isWaitingCapcha,
        isShowCapcha: state.auth.isShowCapcha,
        isDarkTheme: state.app.isDarkTheme,
        errorLogin: state.auth.errorLogin
    }
}


export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType>(mapStateToProps, { logintMe, getCapchaUrl }),
)(LoinContainer)