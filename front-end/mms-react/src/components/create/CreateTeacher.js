import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import classes from "./CreateTeacher.module.css";
import axios from "axios";

const CreateTeacher = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendDataToAPI = () => {
    axios.post("http://localhost:8082/teachers", {
      firstName,
      lastName,
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
          <Link to={"/show-teacher"} className={classes.link}>
            Show Teachers
          </Link>

          <Link to={"/add-student"} className={classes.link}>
            Add Students
          </Link>

          <Link to={"/show-student"} className={classes.link}>
            Show Students
          </Link>

          <Link to={"/admin-login"} className={classes.link}>
            Logout
          </Link>
        </div>
        <div className={classes.content}>
          <div>
            <h3>Add Teacher details</h3>
          </div>
          <div>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input
                  name="fname"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  name="lname"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  name="fname"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name="fname"
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

export default CreateTeacher;
