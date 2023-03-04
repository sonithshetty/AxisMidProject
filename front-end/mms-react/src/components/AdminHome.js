import { Link } from "react-router-dom";
import classes from "./AdminHome.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const AdminHome = () => {
  const [school, setSchool] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/school").then((response) => {
      setSchool(response.data);
    });
  }, []);

  return (
    <div>
      {/* {school.map((e) => {
        return (
          <div>
            <p>{e.totalFunds}</p>
          </div>
        );
      })} */}
      <div>
        <div className={classes.main}>
          <div className={classes.navbar}>
            <Link to={"/admin-login"} className={classes.ulist1}>
              Logout
            </Link>
          </div>
          <div className={classes.container}>
            <Link to={"/add-teacher"} className={classes.ulist1}>
              Add Teacher
            </Link>

            <Link to={"/add-student"} className={classes.ulist1}>
              Add Student
            </Link>

            <Link to={"/show-teacher"} className={classes.ulist1}>
              Show Teacher
            </Link>

            <Link to={"/show-student"} className={classes.ulist1}>
              Show Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
