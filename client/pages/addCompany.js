import React, { useState } from "react";
import axios from "axios";
import { getSession } from "next-auth/react";

const addCompany = () => {
  const [cName, setCName] = useState();
  const [address, setAddress] = useState();
  const [regNo, setRegNo] = useState();
  const [wd, setWd] = useState();

  const addComp = () => {
    axios
      .post("http://localhost:3001/cmp/company/addcompany", {
        name: cName,
        address: address,
        regNo: regNo,
        wd: wd,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>Add a Company</h1>
      <input
        type="text"
        placeholder="Enter Company Name"
        onChange={(e) => {
          setCName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Address"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <input
        type="String"
        placeholder="Enter Company Regis No."
        onChange={(e) => {
          setRegNo(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter Company Working days"
        onChange={(e) => {
          setWd(e.target.value);
        }}
      />

      <button onClick={addComp}> ADD To Database</button>
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
}
