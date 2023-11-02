import "./login.css";
import { Link } from "react-router-dom";
import { getAuth,signInWithEmailAndPassword } from "../../firebase/config";
import { useRef } from "react";
export default function Login() {
  
  const auth = getAuth();
  const email = useRef();
  const password = useRef();
  
  const loginHandler = () => {
    console.log("login handler is working");
    signInWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed in
        console.log('sign in user');
        const user = userCredential.user;
        // ...
        if(user) {
          window.location.href = '/'
        }else{
          alert('yahi ruk jaou jani')
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
  };
  return (
    <div classNameName="login">
      <div classNameName="loginWrapper">
        <div classNameName="loginLeft">
          <h3 classNameName="loginLogo">Tech Blog App</h3>
          <span classNameName="loginDesc">Connect with us to see new blogs.</span>
        </div>
        <div classNameName="loginRight">
          <div classNameName="loginBox">
            <input
              placeholder="Email Address"
              type="email"
              classNameName="loginInput"
              ref={email}
              />
            <input
              ref={password}
              placeholder=" Password"
              type="password"
              classNameName="loginInput"
            />
            <button classNameName="loginButton" onClick={loginHandler}>
              {" "}
              Log In
            </button>
            <span classNameName="loginForgot">Forgot Password</span>
            <button classNameName="loginRegisterButton">
              <Link to={"/signup"}>Create a new Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
