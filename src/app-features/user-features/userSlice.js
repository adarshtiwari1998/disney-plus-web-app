import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    photo: '',
};

const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        // when users logs in all this code are running and doing and remember
        // for user login details save 
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        // signnout state
        setSignOutState: (state) => {
        // set everything to null because user are decide to sign out
        // logout or forget this code are execute
        state.name = null;
        state.email = null;
        state.photo = null;
       },
    }
});

// export this details to another folder or file
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

// this code get access to the username, useremail, userphoto into other folder or file

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;