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
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Tech Blog App</h3>
          <span className="loginDesc">Connect with us to see new blogs.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email Address"
              type="email"
              className="loginInput"
              ref={email}
              />
            <input
              ref={password}
              placeholder=" Password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton" onClick={loginHandler}>
              {" "}
              Log In
            </button>
            <span className="loginForgot">Forgot Password</span>
            <button className="loginRegisterButton">
              <Link to={"/signup"}>Create a new Account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
