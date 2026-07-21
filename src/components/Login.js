import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState("true");

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div className="relative">
      <Header />
      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ffa9d590-69c5-406f-bff9-e2ced3baa6ad/web/IN-en-20260713-TRIFECTA-perspective_75c0557e-9bbb-4149-9913-b87d4d7a30b7_small.jpg"
        alt="bg-img"
      />
      {/* <div className=" p-4 inset-0 text-center absolute">
        <h2 className="text-white font-bold text-xl">Enter your info to sign in</h2>
        <h4 className="text-white font-bold">Or get started with a new account.</h4>
        <form className="m-auto w-3/12">
          <input className='p-2 m-2 w-30 border border-solid border-gray-400' type="text" placeholder="Email or Mobile Number" />
          <br></br>
          <button className="py-2 px-16 mx-6 rounded-sm w-30 text-white bg-red-700">Continue</button>
        </form>
      </div> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" p-4 text-center">
          {/* <h1 className="text-white text-2xl font-bold shadow-black shadow-2xl">
            Enter your info to sign in
          </h1>

          <h4 className="text-white font-bold">
            Or get started with a new account.
          </h4> */}

          <form className="bg-black/70 p-8 rounded-md w-[450px]">
            <h2 className="font-bold text-white p-2 text-3xl">{signIn ? "Sign Up" : "Sign In"}</h2>
            { signIn && <input
              className="my-4 p-2 text-white justify-start pl-34 w-full border border-solid border-gray-400 bg-gray-900/70 rounded-md"
              type="text"
              placeholder="Full Name"
            /> }
            <br></br>
            <input
              className="my-4 p-2 text-white justify-start pl-34 w-full border border-solid border-gray-400 bg-gray-900/70 rounded-md"
              type="text"
              placeholder="Email or Mobile Number"
            />
            <br></br>
            <input
              className="my-4 p-2 text-white justify-start pl-34 w-full border border-solid border-gray-400 bg-gray-900/70 rounded-md"
              type="text"
              placeholder="Password"
            />
            <br></br>
            <button className="justify-start pl-34 py-2 w-full my-16 px-16 rounded-sm text-white bg-red-700">
              {signIn ? "Sign Up" : "Sign In"}
            </button>
            <p
              className="text-white cursor-pointer"
              onClick={() => {toggleSignIn()}}
            >
              {!signIn ? "New to Netflix? Sign up Now" : "Already Registered. Sign in Now" }
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
