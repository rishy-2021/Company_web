import axios from "axios";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const department = () => {
  const router = useRouter();
  const { dep_id } = router.query;
  const [students, setStudents] = useState();

  useEffect(() => {
    axios
      .post(`http://localhost:3001/cmp/employee/getemployees`, {
        dep_id: dep_id,
      })
      .then((res) => {
        setStudents(res?.data?.data);
      });
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <div>
        {students &&
          students.map((student) => (
            <div>
              {" "}
              <ul key={student._id}>
                <li> Name : {student?.name}</li>
                <li> Address : {student?.address}</li>
                <li> Experience :{student?.exp}</li>
                <li> Salery : {student?.salery}</li>
              </ul>
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
