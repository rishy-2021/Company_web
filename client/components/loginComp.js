import React, { useState } from "react";
import { signIn } from "next-auth/react";

const loginComp = () => {
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 40,
      }}
    >
      <h1>SignUp</h1>
      <input
        type="text"
        placeholder="Enter your Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
        }}
      />
      <button
        onClick={() => {
          signIn("email", { email: email });
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {" "}
        Email
      </button>

      <button
        type="submit"
        onClick={() => {
          signIn("google");
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        SignUp with Google
      </button>
    </div>
  );
};

export default loginComp;
