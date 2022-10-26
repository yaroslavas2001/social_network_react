import React from "react";
import { connect } from "react-redux";
import { setProfile } from "./../../../redux/profile-reducer"
import Profile from "./Profile";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.profileId !== undefined ? this.props.router.params.profileId : 2;
    this.props.setProfile(profileId)
  }
  render() {


    return (<Profile {...this.props} />)
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
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
  connect(mapStateToProps, { setProfile }),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)