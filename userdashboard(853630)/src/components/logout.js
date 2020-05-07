import React, { Component } from "react";
import { Link } from "react-router-dom";
class Logout extends Component{
  render(){
  return (
    <div>
      <h2 className="small mt-auto">you have been logged out successfully</h2>
      <p className="small">
        Click <Link to="/login">here</Link>to login again.
      </p>
    </div>
  );
}};

export default Logout;