import {
  ADD_EMP,
  GET_EMP,
  DELETE_EMP,
  UPDATE_EMP,
  SET_CURRENT_EMP,
  CLEAR_CURRENT_EMP,
  FILTER_EMP,
  CLEAR_FILTER_EMP,
  SET_ALERT,
  CLEAR_ALERT,
} from "./actions";

export default (state, action) => {
  switch (action.type) {
 
    case GET_EMP:
            return{
                 ...state,
                 employees:action.payload,
                 loading:false

            };

    case ADD_EMP:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading:false
      };
      case DELETE_EMP:
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !==action.payload),
        loading:false
      };
      case SET_CURRENT_EMP:
      return {
        ...state,
        current: action.payload
      };
      case CLEAR_CURRENT_EMP:
      return {
        ...state,
        current : null
      };
      case UPDATE_EMP:
        return {
          ...state,
          employee: state.employees.map(employee=> 
            employee.id === action.payload.id ? action.payload:employee),
            loading:false
        };
    default:
      return state;
  }
};
