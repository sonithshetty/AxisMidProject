import React from "react";
import classes from "./AdminLogin.module.css";
import { Form, Button } from "semantic-ui-react";

const TeacherLogin = () => {
  return (
    <div className={classes.main}>
      <div>
        <h3>Teacher Login</h3>
      </div>
      <div>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Enter your email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Enter your password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  );
};

export default TeacherLogin;
