import React from "react";
import logo from '../images/logo-b.svg'

const SignIn = ({ signInGoogle }) => {
  return (
    <div className="flex font-sans">
      <form className="flex-auto p-6">
        <div className="flex space-x-4 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <img className="h-6 w-auto" src={logo} alt="logo kalndar" />
          </div>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-black text-white"
            type="button"
            onClick={signInGoogle}
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
