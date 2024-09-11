import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./AppData";

const userSlice=createSlice({
    name:"Users",
    initialState:userList,
    reducers:{

    }

})
export default userSlice.reducer;