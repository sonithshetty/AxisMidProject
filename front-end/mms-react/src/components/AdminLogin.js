import React from "react";
import classes from "./AdminLogin.module.css";
import { Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className={classes.main}>
      <div>
        <h3>Admin Login</h3>
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
          <Link to={"/admin-home"} className={classes.link}>
            <Button type="submit">Submit</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
