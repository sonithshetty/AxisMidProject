import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import classes from "./UpdateStudent.module.css";
import axios from "axios";

const UpdateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [std, setStd] = useState("");
  const [ID, setID] = useState(null);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPassword(localStorage.getItem("password"));
    setStd(localStorage.getItem("std"));
    setID(localStorage.getItem("ID"));
  }, []);

  const sendDataToAPI = () => {
    axios.post(`http://localhost:8082/students/${ID}`, {
      name,
      std,
      email,
      password,
    });
  };

  return (
    <div className={classes.main}>
      <div className={classes.navbar}>
        <h3>Admin Name</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.sidenav}>
          <Link to={"/show-student"} className={classes.link}>
            Show Students
          </Link>

          <Link to={"/add-teacher"} className={classes.link}>
            Add Teachers
          </Link>

          <Link to={"/show-teacher"} className={classes.link}>
            Show Teachers
          </Link>

          <Link to={"/admin-login"} className={classes.link}>
            Logout
          </Link>
        </div>
        <div className={classes.content}>
          <div>
            <h3>Add Student details</h3>
          </div>
          <div>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input
                  name="fname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Name"
                />
              </Form.Field>
              <Form.Field>
                <label>Std</label>
                <input
                  name="std"
                  value={std}
                  onChange={(e) => setStd(e.target.value)}
                  placeholder="Std"
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Field>
              <Button type="submit" onClick={sendDataToAPI}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
