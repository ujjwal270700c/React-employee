import React,{useContext,useEffect} from 'react'
import AuthContext from '../auth/AuthContext';


// const About = (props) => {
//     const authcontext=useContext(AuthContext);
//     const {isAuthentocated,loadUser}=authcontext;
//     useEffect(() => {
//         if(isAuthentocated){
//             loadUser();
//         }else{
//             props.history.push("/login");
//         }        
//     }, [isAuthentocated,props.history]);
//     return (
//         <div>
//             <h3 className="alert alert-success">About App page</h3>
//         </div>
//     )
// }


export const About = () => {
    return (
        <div>
             <h3 className="alert alert-success">About App page</h3>
        </div>
    )
}


export default About
