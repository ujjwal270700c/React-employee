import React, { useContext, useEffect } from "react";
import EmployeeForm from "../EmployeeForm";
import AllEmployess from "../employee/AllEmployee";
import AuthContext from "../auth/AuthContext";

const Home = (props) => {
  const authcontext = useContext(AuthContext);
  useEffect(() => {
    authcontext.loadUser();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <AllEmployess />
        </div>
        <div className="col-sm-4">
          <EmployeeForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
