import "./signup.css";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "../../firebase/config";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const auth = getAuth();
const navigate = useNavigate()
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();

  const signupHandler = () => {
    console.log("signup handler is working");
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
          toast.success("user signup successfully");
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        
        } else {
          toast.failed("user not registered");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Tech Blog App</h3>
          <span className="loginDesc">Here is you Site to create a blog.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="UserName"
              type="text"
              className="loginInput"
              ref={userName}
            />
            <input
              placeholder="Email Address"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder=" Password"
              type="password"
              className="loginInput"
              ref={password}
            />
            <input
              placeholder="Confirm Password "
              type="password"
              className="loginInput"
              ref={cPassword}
            />
            <button className="loginButton" onClick={signupHandler}>
              {" "}
              Sign Up
            </button>
            <Link to={"/login"}>
            <button className="loginRegisterButton">
              Login into Account
            </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
