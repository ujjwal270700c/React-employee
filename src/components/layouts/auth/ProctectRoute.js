import React,{useContext} from 'react';
import {Route,Redirect} from 'react-dom';
import AuthContext from "./AuthContext";
const ProctectRoute = ({ component:Component, ...rest}) => {
    const authcontext=useContext(AuthContext);
    const {isAuthenticated,loading}=authcontext;
    return (
        <Route
            {...rest}
            render={props =>
            !isAuthenticated&& !loading ?(
                <Redirect to="/login"/>
            ): (
              <Component {...props} />
            )
            }
        />
    )
}

export default ProctectRoute;
