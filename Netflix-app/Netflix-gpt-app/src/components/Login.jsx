/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateData";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleSignIn = () => {
    setSignIn(!isSignIn);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    // if (isSignIn) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "Error Code" + errorCode,
            "Error Message" + errorMessage,
          );
        });
    }
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "Error Code" + errorCode,
            "Error Message" + errorMessage,
          );
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="">
        <img
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
          alt=""
        />
      </div>
      <form className="absolute top-20 left-1/2 -translate-x-1/2 w-96 p-12  bg-black/80 text-white">
        <div className="">{isSignIn ? "Sign In" : "Sign Up"}</div>
        {!isSignIn && (
          <input
            ref={fullname}
            type="text"
            placeholder="Fullname"
            className="w-full p-2 m-2 bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="w-full p-2 m-2 bg-gray-700  rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 m-2 bg-gray-700 rounded-md "
        />
        {errorMessage}
        <button
          className="w-full bg-red-600 text-white py-3 rounded-md mt-4 mb-2"
          onClick={(e) => handleFormSubmit(e)}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <span className="cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </span>
      </form>
    </div>
  );
};
export default Login;
