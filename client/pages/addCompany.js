import React, { useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const addCompany = () => {
  const [cName, setCName] = useState();
  const [address, setAddress] = useState();
  const [regNo, setRegNo] = useState();
  const [wd, setWd] = useState();
  const router = useRouter();

  const addComp = () => {
    axios
      .post("http://localhost:3001/cmp/company/addcompany", {
        name: cName,
        address: address,
        regNo: regNo,
        wd: wd,
      })
      .then((res) => {
        // console.log(res.data);
        alert("Company Added Successfully");
        window.location.reload();
      });
  };

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
      <h1>Add a Company</h1>
      <input
        type="text"
        placeholder="Enter Company Name"
        onChange={(e) => {
          setCName(e.target.value);
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
        }}
      />
      <input
        type="text"
        placeholder="Enter Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
        }}
      />
      <input
        type="String"
        placeholder="Enter Company Regis No."
        onChange={(e) => {
          setRegNo(e.target.value);
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
        }}
      />
      <input
        type="text"
        placeholder="Enter Company Working days"
        onChange={(e) => {
          setWd(e.target.value);
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
        }}
      />

      <button
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
          cursor: "pointer",

          fontSize: "1rem",
          fontWeight: "500",
        }}
        onClick={addComp}
      >
        {" "}
        Add Company
      </button>

      <div style={{ display: "flex", width: "30%", marginTop: "15px" }}>
        <button
          style={{
            width: "40%",
            padding: "12px 20px",
            marginLeft: "15px",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: "lightgray",
            fontSize: "1rem",
            fontWeight: "600",
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          Go to HOME
        </button>
        <button
          style={{
            width: "44%",
            padding: "12px 20px",
            marginLeft: "18px",
            borderRadius: "10px",
            cursor: "pointer",
            backgroundColor: "lightgray",
            fontSize: "1rem",
            fontWeight: "600",
          }}
          onClick={() => {
            router.push("/viewCompany");
          }}
        >
          {" "}
          View Companies
        </button>
      </div>
    </div>
  );
};

export default addCompany;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: session?.user,
    },
  };
}
