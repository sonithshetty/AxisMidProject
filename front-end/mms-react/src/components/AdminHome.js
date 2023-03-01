import { Link } from "react-router-dom";
import classes from "./AdminHome.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const AdminHome = () => {
  const [school, setSchool] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/school").then((response) => {
      setSchool(response.data);
      // console.log(setSchool);
    });
  }, []);

  return (
    <div>
      {school.map((e) => {
        return (
          <div>
            <p>{e.totalFunds}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AdminHome;
