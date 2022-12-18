import React from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Home = () => {
  const router = useRouter();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "40px",
      }}
    >
      <button
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        onClick={() => signOut()}
      >
        Sign out
      </button>
      <button
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
          marginTop: "25px",
          cursor: "pointer",
        }}
        onClick={() => router.push("/addCompany")}
      >
        Want to add a company
      </button>

      <button
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
          marginTop: "25px",
          cursor: "pointer",
        }}
        onClick={() => router.push("/viewCompany")}
      >
        View Companies
      </button>
    </div>
  );
};

export default Home;
