import axios from "axios";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const addDepatment = () => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const router = useRouter();

  //   console.log(router);

  const { comp_id } = router.query;
  console.log("id", comp_id);

  const addDeprt = () => {
    axios
      .post("http://localhost:3001/cmp/department/adddepartment", {
        dep_id: id,
        name: name,
        comp_id: comp_id,
      })
      .then((res) => {
        // console.log(res);
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
      <h1>Add Department</h1>

      <input
        type="text"
        placeholder="Enter Department Name"
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
        placeholder="Enter Department Id"
        onChange={(e) => {
          setId(e.target.value);
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
        onClick={addDeprt}
      >
        {" "}
        ADD Department
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

export default addDepatment;

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
