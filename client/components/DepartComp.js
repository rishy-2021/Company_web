import axios from "axios";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const DepartComp = ({ id }) => {
  const [dep, setDep] = useState();
  // console.log(dep, id);

  const deleteDep = (dep_id) => {
    axios
      .post("http://localhost:3001/cmp/department/deletedepartment", {
        id: dep_id,
      })
      .then((res) => {
        window.location.reload();
      });
  };

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
            <div style={{ margin: "18px" }}>
              <Link
                href={{
                  pathname: "/department",
                  query: {
                    dep_id: data?._id,
                  },
                }}
                style={{ fontSize: "1.2rem", margin: "20px" }}
              >
                {data?.name}
              </Link>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  alert(
                    "Are You Sure To Delete A Department , It will delete all of its employees data "
                  );
                  deleteDep(data?._id);
                }}
              >
                Delete Department
              </button>
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DepartComp;
