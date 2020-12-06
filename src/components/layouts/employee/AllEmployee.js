import React, { Fragment, useContext,useEffect } from "react";
import EmployeeContext from "./EmployeeContext";
import EmployeeItems from '../Employeeitem'

const AllEmployee = () => {
  const employeeContext = useContext(EmployeeContext);
  const { employees,getEmployee,loading } = employeeContext;
  useEffect(()=>{
    getEmployee();
  },[]);
  return (
    <Fragment>
      {employees.map((employee) => (
        <EmployeeItems key={employee.id} employee={employee}/>
      ))}
    </Fragment>
  );
};

export default AllEmployee;
