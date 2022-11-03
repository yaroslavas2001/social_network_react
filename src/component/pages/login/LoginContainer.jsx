import React from "react";
import Login from "./Login";
import { logintMe ,getCapchaUrl,finishСheckingCapcha} from "./../../../redux/auth-reducer"
import { compose } from "redux";
import { connect } from "react-redux"

class LoinContainer extends React.Component {
    componentDidMount(){
        this.props.getCapchaUrl()
    }
    render() {
        return (<Login {...this.props} />)
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        capchaUrl:state.auth.capchaUrl,
        isWaitingCapcha:state.auth.isWaitingCapcha,
        isShowCapcha:state.auth.isShowCapcha
    }
}


export default compose(
    connect(mapStateToProps, { logintMe,getCapchaUrl,finishСheckingCapcha }),
)(LoinContainer)