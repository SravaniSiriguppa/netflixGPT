import { useState, useRef, use } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  // used to navigate to a diff page via path
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState("true");
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormBtn = () => {
    // console.log(email.current.value, password)
    const message = checkValidData(
      name.current?.value || "",
      email.current.value,
      password.current.value,
    );
    setErrorMessage(message);
    console.log(message);

    // Invalid Data
    if (message) return;

    if (!isSignIn) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/59867313?s=400&u=8c66c2ae8d1c8c8246a57bcf61791689e5e74c1c&v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
               dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        }),
                      );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In logic
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
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="relative">
      <Header />
      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_small.jpg"
        alt="bg-img"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" p-4 text-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black/70 p-8 rounded-md w-[450px]"
          >
            <h2 className="font-bold text-white p-2 text-3xl">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <input
                ref={name}
                className="my-4 p-2 text-white justify-start pl-34 w-full border border-solid border-gray-400 bg-gray-900/70 rounded-md"
                type="text"
                placeholder="Full Name"
              />
            )}
            <br></br>
            <input
              ref={email}
              className="my-4 p-2 text-white justify-start pl-34 w-full border border-solid border-gray-400 bg-gray-900/70 rounded-md"
              type="text"
              placeholder="Email"
            />
            <br></br>
            <input
              ref={password}
              className="my-4 p-2 text-white justify-start pl-34 w-full border border-solid border-gray-400 bg-gray-900/70 rounded-md"
              type="password"
              placeholder="Password"
            />
            <br></br>
            <p className="text-red-600 font-bold text-lg py-2">
              {errorMessage}
            </p>
            <button
              onClick={() => handleFormBtn()}
              className="justify-start pl-34 py-2 w-full my-16 px-16 rounded-sm text-white bg-red-700"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              className="text-white cursor-pointer"
              onClick={() => {
                toggleSignIn();
              }}
            >
              {isSignIn
                ? "New to Netflix? Sign Up Now"
                : "Already Registered. Sign In Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
