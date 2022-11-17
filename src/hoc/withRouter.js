import React from "react";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
export const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigation = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigation, params }}
                navigation={navigation}
            />
        );
    }
    return ComponentWithRouterProp;
}