import react, { useReducer } from "react";
import uuid from "react-uuid";
import EmployeeContext from "./EmployeeContext";
import EmployeeReducer from "./EmployeeReducer";
import axios from 'axios';
import {
  ADD_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  SET_CURRENT_EMP,
  CLEAR_CURRENT_EMP,
  GET_EMP,
  FILTER_EMP,
  CLEAR_FILTER_EMP,
  SET_ALERT,
  CLEAR_ALERT,
} from "./actions";

const EmployeeState = (props) => {
  const initialState = {
    employees: [],
    current : null
  };
  const [state, dispatch] = useReducer(EmployeeReducer, initialState);
  /*add action here */
   // get all employee
   const getEmployee=async ()=>{
      try {
        const res = await axios.get('/api/employee');
        dispatch({
          type: GET_EMP,payload:res.data
        });
      } catch (error) {
        console.log(error);
      }
  };

  const AddEmployee=async (employee)=>{
    const config ={
      headers:{
        'Conten-Type':'application/json'
      }
    }; 
      try {
        const res = await axios.post('/api/employee',employee,config);
        dispatch({
          type: ADD_EMP,payload: employee
        });
      } catch (error) {
        console.log(error);
      }
  };

  const deleteEmployee= id =>{
    dispatch({
      type: DELETE_EMP,payload: id
    });
  }
 
  const setCurrent= employee =>{
    dispatch({
      type: SET_CURRENT_EMP,payload: employee
    });
  }

  const clearCurrent = () =>{
    dispatch({
      type: CLEAR_CURRENT_EMP
    });
  }
  const updateEmployee= employee =>{
    employee.id=uuid();
    dispatch({
      type: UPDATE_EMP,payload: employee
    });
  }


  return (
    <EmployeeContext.Provider
      value=
      {{
        employees: state.employees,
        current: state.current,
        AddEmployee,
        deleteEmployee,
        setCurrent,
        clearCurrent,
        updateEmployee,
        getEmployee
      }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};
export default EmployeeState;
