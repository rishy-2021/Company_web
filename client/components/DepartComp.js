import axios from "axios";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const DepartComp = ({ id }) => {
  const [dep, setDep] = useState();
  console.log(dep, id);

  useEffect(() => {
    axios
      .post(`http://localhost:3001/cmp/department/getdepartment`, { id })
      .then((res) => {
        setDep(res?.data?.data);
      });
  }, []);

  return (
    <div style={{ marginTop: "15px", marginBottom: "20px" }}>
      Departments -{" "}
      <div style={{ marginBottom: "15px", padding: "8px" }}>
        {dep &&
          dep.map((data) => (
            //   <li> {data?.name}</li>
            <Link
              href={{
                pathname: "/department",
                query: {
                  dep_id: data?._id,
                },
              }}
              style={{ padding: "15px", fontSize: "1.2rem" }}
            >
              {data?.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DepartComp;
