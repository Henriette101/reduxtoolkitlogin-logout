import React from "react";
import {login, logout} from "../features/user";
import { useDispatch } from "react-redux/es/exports";

 function Login(){

const dispatch= useDispatch();
    return(
<div>
    <button onClick={()=> {
        dispatch(login({name:"pedro",age:20, email:"ihenry@gmail.com"}));
    }}>Login</button>

<button onClick={()=> {
        dispatch(logout());
    }}>Logout</button>
</div>

    );
 }



 export default Login;