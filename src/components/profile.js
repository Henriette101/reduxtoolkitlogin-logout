import React from "react";
import { useSelector } from "react-redux/es/exports";

function Profile(){

    const user = useSelector((state)=>state.user.value);
    const themecolor=useSelector((state)=>state.theme.value);

    

    return(
    <div style={{color:themecolor}}>
        <h1>profile page</h1>
        <p>name:{user.name}</p>
        <p>age:{user.age}</p>
        <p>email:{user.email}</p>

    </div>
    );
}


export default Profile;