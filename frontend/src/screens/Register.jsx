import React, { useState } from "react";
import { register } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useAsyncValue } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState();
  const handleSubmit = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (credentials.password === confirmPassword) {
      register(dispatch, credentials);
    } else {
      setError("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="w-screen h-screen  flex items-center justify-center ">
        <div className="wd-[80%] md:w-[40%] bg-white p-5 md:p-10 border-2 rounded shadow-sm">
          <label className="text-4xl font-thin">Create an account</label>
          <form className="flex flex-wrap">
            <input
              className="flex-1 min-w-[40%] p-3 my-3 border"
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => handleSubmit(e)}
            />
            <input
              className="flex-1 min-w-[40%] p-3 m-3 border"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleSubmit(e)}
            />
            <input
              className="flex-1 min-w-[40%] p-3 my-3 border"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleSubmit(e)}
            />
            <input
              className="flex-1 min-w-[40%] p-3 m-3 border"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </form>
          <p className="my-2">
            By creating an account, I consent to the processing of my personal
            data in accordance with the{" "}
            <span className="text-black font-bold">PRVACY POLICY</span>
          </p>
          {error ? (
            <h1 className="font-bold text-red-500 text-center my-3">{error}</h1>
          ) : null}
          <button
            onClick={handleRegister}
            className="w-[40%] mt-3 p-3 bg-teal-600 text-white"
          >
            CREATE
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
