import React from "react";
import { connect } from "react-redux";
import { setProfile, getStatus, updateStatus } from "../../../redux/profile-reducer"
import Profile from "./Profile";
import { compose } from "redux";
import { withRouter } from "../../../hoc/withRouter"
import { Navigate } from "react-router-dom";
// type MapStateToPropsType = {
//   profile: ProfileType
//   status: string
//   autorizedUserId: number
//   isAuth: boolean
// }
// type MapDispatchToPropsType = {
//   setProfile: (id: number) => void
//   getStatus: (id: number) => void
//   updateStatus: (status: string) => void
// }
// type propsType = MapStateToPropsType & MapDispatchToPropsType
class ProfileContainer extends React.Component {
  renderRedirect = () => {
    return <Navigate to="/login" />;
  };
  refreshProfile() {
    let profileId = this.props.router.params.profileId ? this.props.router.params.profileId : this.props.autorizedUserId
    if (!profileId) {
      profileId = 26414

      // this.props.navigation("/login", {})


      // console.log("router",this.props.router)
      // navigation нужно использовать в useEffect
      // не сработает, потому что редиректы не тут нужно сделать
      // this.props.router.navigate("/login"); 
      // не сработает потому что history - undefined 
      // this.props.history.push('/login')
    }
    if (profileId) {
      this.props.setProfile(profileId)
      this.props.getStatus(profileId)
    }


  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps) {
    if (this.props.router.params.profileId !== prevProps.router.params.profileId)
      this.refreshProfile()
  }
  render() {
    return (<Profile {...this.props} />)
  }
}
// AppReducerType
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
  }
}

// function withRouter(Component) {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return (
//       <Component
//         {...props}
//         router={{ location, navigate, params }}
//       />
//     );
//   }
//   return ComponentWithRouterProp;
// }

export default compose(
  withRouter,
  connect(mapStateToProps, { setProfile, getStatus, updateStatus }),

  // withAuthRedirect
)(ProfileContainer)