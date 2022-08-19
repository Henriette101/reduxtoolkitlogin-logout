import { createSlice } from "@reduxjs/toolkit" ;


const initialStatevalue="";
 export const themeSlice=createSlice({
    
name:"theme",
initialState:{value:initialStatevalue},

reducers:{
changecolor:(state, action)=>{
  state.value= action.payload;
},



},


    });

    export  const { changecolor } = themeSlice.actions;
    export default themeSlice.reducer;