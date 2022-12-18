import axios from "axios";
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
            <ul key={student._id}>
              <li> Name : {student?.name}</li>
              <li> Address : {student?.address}</li>
              <li> Experience :{student?.exp}</li>
              <li> Salery : {student?.salery}</li>
            </ul>
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
