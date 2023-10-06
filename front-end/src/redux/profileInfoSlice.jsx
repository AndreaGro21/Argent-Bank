

import { createSlice } from "@reduxjs/toolkit";
const profileInfoSlice = createSlice({
    name: "profile",
    initialState:
    {
        email: "",
        firstName: "",
        lastName: "",
        nickName: "",
    },
    reducer:
    {
        setGetProfile: (state, action) => {
            state.email = action.body.payload.email;
            state.firstName = action.body.payload.firstName;
            state.lastName = action.body.payload.lastName;
            state.userName = action.body.payload.nickName;
        },
        setEditProfile: (state, action) => {
            state.userName = action.payload     
        }
    }
})

export const { setGetProfile, setEditProfile } = profileInfoSlice.actions
export default profileInfoSlice.reducer