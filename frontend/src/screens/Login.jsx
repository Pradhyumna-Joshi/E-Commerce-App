import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <>
      <div className="w-screen h-screen  flex items-center justify-center ">
        <div className="w-[80%] md:w-[40%] bg-white p-5 md:p-10 border-2 rounded shadow-sm">
          <label className="text-4xl font-thin">Sign In</label>
          <br />
          <label className="text-xl font-thin">
            Please sign in to continue
          </label>
          <form className="flex flex-col">
            <input
              className="min-w-[40%] p-3 my-3 border"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="min-w-[40%] p-3 my-3 border"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end">
              <a className="my-1 hover:text-blue-500 cursor-pointer">
                Forgot Password?
              </a>
            </div>

            <button
              onClick={handleClick}
              disabled={isFetching}
              className={`w-[40%] mt-3 mx-auto p-3 bg-teal-500 ${
                isFetching ? "cursor-not-allowed" : "cursor-pointer"
              } text-white`}
            >
              LOGIN
            </button>
            {error ? (
              <h1 className="text-xl my-3 text-center text-red-600 font-semibold">
                Something went Wrong
              </h1>
            ) : null}
            <div className="flex justify-center">
              <Link
                to={"/register"}
                className=" text-center my-2  hover:text-blue-500 cursor-pointer "
              >
                Don't have an account?Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
