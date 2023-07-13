import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        id: null,
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        userName: null,
        token: null,
    },
    reducers:{
        login: (state,action) => {
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.token = null;
            state.id = null;
            state.email = null;
            state.password = null;
            state.firstName = null;
            state.lastName = null;
            state.userName = null;
        },
        getInfo: (state,action) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
        }
    }
})



export const { login, logout, getInfo} = userSlice.actions;

export const selectUser = (state) => state.token.token;
export const selectName = (state) => state.token.userName;
export const selectFirstName = (state) => state.token.firstName;
export const selectLastName = (state) => state.token.lastName;

export default userSlice.reducer;