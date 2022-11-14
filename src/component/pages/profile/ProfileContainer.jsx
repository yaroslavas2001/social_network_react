import React from "react";
import { connect } from "react-redux";
import { setProfile, getStatus, updateStatus } from "./../../../redux/profile-reducer"
import Profile from "./Profile";
import { compose } from "redux";
import { withRouter } from "./../../../hoc/withRouter"

class ProfileContainer extends React.Component {
  componentDidMount() {

    let profileId = this.props.router.params.profileId
    if (!profileId) {
      profileId = this.props.autorizedUserId
      if (!profileId) {
        profileId = 26414
        // не сработает, потому что редиректы не тут нужно сделать
        // this.props.router.navigate("/login"); 
        // не сработает потому что history - undefined 
        // this.props.history.push('/login')
      }
    }

    this.props.setProfile(profileId)
    this.props.getStatus(profileId)
  }
  render() {
    return (<Profile {...this.props} />)
  }
}
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
  connect(mapStateToProps, { setProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)