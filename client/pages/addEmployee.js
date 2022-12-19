import axios from "axios";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const addStudents = () => {
  const router = useRouter();
  const { dep_id } = router.query;
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [salery, setSalery] = useState();
  const [exp, setExp] = useState();

  const addEmp = () => {
    axios
      .post(`http://localhost:3001/cmp/employee/addemployee`, {
        name: name,
        address: address,
        salery: salery,
        dep_id: dep_id,
        exp: exp,
      })
      .then((res) => {
        alert("Employee Added Successfully");
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
      <input
        type="text"
        placeholder="Enter Student Name"
        onChange={(e) => {
          setName(e.target.value);
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
        type="Number"
        placeholder="Enter Salery"
        onChange={(e) => {
          setSalery(e.target.value);
        }}
        style={{
          width: "30%",
          padding: "12px 20px",
          margin: "8px 0",
          borderRadius: "10px",
        }}
      />
      <input
        type="Number"
        placeholder="Enter Your Experience"
        onChange={(e) => {
          setExp(e.target.value);
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
        }}
        onClick={addEmp}
      >
        {" "}
        ADD Employee
      </button>

      <div style={{ width: "30%", marginTop: "15px" }}>
        <button
          style={{
            width: "44%",
            padding: "12px 20px",
            margin: "0 18px 0 5px",
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
            width: "46%",
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

export default addStudents;

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
