
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
        },
        setResetProfile: () => { //se metto parametro?
            return initialState;//ritorna errore per lo scope
        },
    }
})

export const { setGetProfile, setEditProfile, resetProfile } = profileInfoSlice.actions
export default profileInfoSlice.reducer