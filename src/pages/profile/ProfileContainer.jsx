import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "./../../redux/profile-reducer"
import Profile from "./Profile";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId =this.props.router.params.profileId!=undefined? this.props.router.params.profileId:2;
    console.log("params",this.props.router.params)
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`).then(
      response => {
        this.props.setUserProfile(response.data)
      })
  }
  
  render() {
    
    return (
      <Profile {...this.props} />
    )
  }
}
let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
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
let WithUrlDataContainerComponent =  withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)