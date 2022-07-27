import React, { useState } from "react";

const SignIn = () => {
  const [userData, setUserData] = useState({ password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  const handleInputChange = e => {
    setUserData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (userData.password === "") {
      setErrorMessage({ value: "Empty Password!" });
    } else if (userData.password === "welcoome") {
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/";
    } else {
      setErrorMessage({ value: "Invalid Password!" });
      window.location.pathname = "/signin";
      return;
    }
  };

  return (
    <div className="">
      <h2
        className="mt-6 text-center text-2xl font-extrabold
      leading-9"
      >
        {" "}
        Spinkart is password protected!{" "}
      </h2>
      <h3>Enter the password to gain access to Spinkart.</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="mb-2">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            {" "}
            Password{" "}
          </label>
          <input
            className="form-control focus:outline-none focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 py-2 px-3 leading-tight text-gray-700 shadow"
            type="password"
            name="password"
            onChange={e => handleInputChange(e)}
          />
        </div>
        <button
          className="btn-btn-primary rounded bg-purple-500 py-2 px-4 font-bold text-white hover:bg-purple-800"
          type="submit"
          onClick={handleSubmit}
        >
          Continue
        </button>

        {errorMessage.value && (
          <p className="text-danger"> {errorMessage.value} </p>
        )}
      </form>
    </div>
  );
};

export default SignIn;
