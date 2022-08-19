import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {changecolor} from"../features/theme";

function Changecolor() {
    const [color, setColor]=useState("");
    const dispatch=useDispatch();
  return (
    <div>
        <input type="text" 
        onChange={(event)=>{setColor(event.target.value);}}/>
        <button  onClick={()=>{ dispatch(changecolor(color));}}>changecolor</button>
    </div>
  );
}

export default Changecolor;