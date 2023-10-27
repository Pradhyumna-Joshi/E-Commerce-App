import {
  loginFailure,
  loginStart,
  loginSuccess,
  signInSuccess,
} from "./userRedux";
import axios from "axios";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://e-commerce-app-mocha-omega.vercel.app/api/auth/login",
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  console.log(user);
  try {
    const res = await axios.post(
      "https://e-commerce-app-mocha-omega.vercel.app/api/auth/register",
      user
    );

    dispatch(signInSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
