import React from "react";
import { connect } from "react-redux";
import { setProfile } from "./../../../redux/profile-reducer"
import Profile from "./Profile";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId !== undefined ? this.props.router.params.profileId : 2;
    this.props.setProfile(profileId)
  }
  render() {
    if (!this.props.isAuth)
      return <Navigate to="/login" />

    return (<Profile {...this.props} />)
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setProfile })(WithUrlDataContainerComponent)