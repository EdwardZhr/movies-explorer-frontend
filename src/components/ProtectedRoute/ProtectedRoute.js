import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props  }) => {

  return(
    (props.loggedIn && props.path!=='/signin' && props.path!=='/signup') || (!props.loggedIn && (props.path==='/signin' || props.path==='/signup')) ? <Component {...props} /> : <Navigate to="/" replace/>
  )
}

export default ProtectedRoute;