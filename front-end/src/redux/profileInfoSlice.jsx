
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
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.nickName;
        },
        setEditProfile: (state, action) => {
            state.userName = action.payload
        }
    }
})







export const { setGetProfile, setEditProfile } = profileInfoSlice.actions
export default profileInfoSlice.reducer