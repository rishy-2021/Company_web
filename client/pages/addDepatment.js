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
        id: id,
        name: name,
        comp_id: comp_id,
      })
      .then((res) => {
        console.log(res);
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
}
