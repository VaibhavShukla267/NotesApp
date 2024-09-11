import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./AppData";

const userSlice=createSlice({
    name:"Users",
    initialState:userList,
    // We will create action here
    reducers:{
        addUser:(state,action)=>{
            // When we did console.log(action) we found that action.payload contain the info that we entered in the field of create.jsx
           state.push(action.payload)
        },
        //    With the help of above we push the actions to home page.


        // We have second action i.e update the existing user value
        
            updateUser:(state,action)=>{
                const{id,name,email}=action.payload;

                const UserUpdate=state.find(user=>user.id == id);
                if(UserUpdate){
                    UserUpdate.name=name;
                    UserUpdate.email=email

                }


            },
            // Delete Action

            deleteUser:(state,action)=>{
                const {id}=action.payload;
                const UserUpdate=state.find(user=>user.id == id);
                if(UserUpdate){
                    return state.filter(f=>f.id !==id);
                }

            }
        


    }

})
export const {addUser,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;