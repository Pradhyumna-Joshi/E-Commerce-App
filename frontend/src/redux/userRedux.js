import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
  registeredUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    reset: (state) => {
      state.currentUser = null;
    },
    signInSuccess: (state, action) => {
      state.registeredUser = action.payload;
    },
  },
});

export const { loginStart, loginFailure, loginSuccess, reset, signInSuccess } =
  userSlice.actions;
export default userSlice.reducer;
