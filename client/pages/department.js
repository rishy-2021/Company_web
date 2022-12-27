import axios from "axios";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const department = () => {
  const router = useRouter();
  const { dep_id } = router.query;
  const [students, setStudents] = useState();
  const [count, setCount] = useState();

  const deleteEmp = (id) => {
    axios
      .post(`http://localhost:3001/cmp/employee/deleteemployees`, {
        id: id,
      })
      .then((res) => {
        setCount(count + 1);
      });
  };

  useEffect(() => {
    axios
      .post(`http://localhost:3001/cmp/employee/getemployees`, {
        dep_id: dep_id,
      })
      .then((res) => {
        setStudents(res?.data?.data);
      });
  }, [count]);

  // console.log(students);

  return (
    <div>
      <h1>Employees</h1>
      <div>
        {students &&
          students.map((emp) => (
            <div>
              {" "}
              <ul key={emp._id}>
                <li> Name : {emp?.name}</li>
                <li> Address : {emp?.address}</li>
                <li> Experience :{emp?.exp}</li>
                <li> Salery : {emp?.salery}</li>
              </ul>
              <button onClick={() => deleteEmp(emp._id)}>
                {" "}
                Delete Employee
              </button>
              <hr />
            </div>
          ))}
      </div>
      <div>
        <Link
          href={{
            pathname: "/addEmployee",
            query: {
              dep_id: dep_id,
            },
          }}
        >
          Add Employee
        </Link>
      </div>
    </div>
  );
};

export default department;

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
