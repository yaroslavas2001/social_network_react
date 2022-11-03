import React from "react";
import { connect } from "react-redux";
import { setProfile, getStatus, updateStatus } from "./../../../redux/profile-reducer"
import Profile from "./Profile";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId !== undefined ? this.props.router.params.profileId : 2;
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
    status: state.profilePage.status
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

export default compose(
  connect(mapStateToProps, { setProfile, getStatus, updateStatus }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)