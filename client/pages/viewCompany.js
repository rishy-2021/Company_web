import axios from "axios";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DepartComp from "../components/DepartComp";

const viewCompany = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/cmp/company/getcompany").then((res) => {
      setData(res?.data?.data);
    });
  }, []);
  console.log(data);

  const router = useRouter();

  return (
    <div>
      <h1>All Companies</h1>

      {data &&
        data.map((comp) => (
          <div>
            {/* <p>name : {comp?.name} </p>
            <p>address : {comp?.address} </p>
            <p>registration no. : {comp?.regNum}</p>
            <p> working days : {comp?.workingDays}</p> */}

            <table style={{ border: "1px solid black" }}>
              <tr style={{ padding: "40px", border: "1px solid black" }}>
                <th>Name</th>
                <th>Address</th>
                <th>Registration No.</th>
                <th>Working Days</th>
              </tr>
              <tr style={{ border: "1px solid black" }}>
                <td>{comp?.name}</td>
                <td>{comp?.address}</td>
                <td>{comp?.regNum}</td>
                <td>{comp?.workingDays}</td>
              </tr>
            </table>

            <DepartComp id={comp._id} />

            <Link
              href={{
                pathname: "/addDepatment",
                query: {
                  comp_id: comp?._id,
                },
              }}
            >
              Add Department
            </Link>

            <hr />
          </div>
        ))}
    </div>
  );
};

export default viewCompany;

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
