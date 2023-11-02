import "./signup.css";
import { Link } from "react-router-dom";
import {  getAuth , createUserWithEmailAndPassword } from "../../firebase/config";
// import { getAuth, createUserWithEmailAndPassword } from "../../firebase/config";
import React, { useRef } from "react";

export default function Signup() {
  const auth = getAuth();

  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();

  const signupHandler = () => {
    console.log('signup handler is working');
    createUserWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        if (user) {
          
          window.location.href = "/login";
        } else {
          alert("nhi jasekty jani");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
  };
  return (
    <div classNameName="login">
      <div classNameName="loginWrapper">
        <div classNameName="loginLeft">
          <h3 classNameName="loginLogo">Tech Blog App</h3>
          <span classNameName="loginDesc">Here is you Site to create a blog.</span>
        </div>
        <div classNameName="loginRight">
          <div classNameName="loginBox">
            <input
              placeholder="UserName"
              type="text"
              classNameName="loginInput"
              ref={userName}
            />
            <input
              placeholder="Email Address"
              type="email"
              classNameName="loginInput"
              ref={email}
            />
            <input
              placeholder=" Password"
              type="password"
              classNameName="loginInput"
              ref={password}
            />
            <input
              placeholder="Confirm Password "
              type="password"
              classNameName="loginInput"
              ref={cPassword}
            />
            <button classNameName="loginButton" onClick={signupHandler}>
              {" "}
              Sign Up
            </button>
            <button classNameName="loginRegisterButton">
              <Link to={"/login"}>Login into Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
