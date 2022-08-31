
// import {useState} from 'react';
// import React from 'react';
import * as React from 'react'
// import PropTypes from "prop-types";


import { Navigate} from "react-router-dom";

// import PropTypes from "prop-types";
//
//
//
// RequireAuth.defaultProps = {
//   isAuth: false,
// };
// //
// RequireAuth.propTypes = {
//   posts: PropTypes.boolean,
// };
//
// export default Post;




function RequireAuth({ children,isAuth }: { children: React.JSX.Element }) {
  // let auth = children.props.auth
  //let location = useLocation();
  // const { isAuth } = this.props;
  if (!isAuth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: children.props.location }} replace />;
  }

  return children;
}






export default RequireAuth;
