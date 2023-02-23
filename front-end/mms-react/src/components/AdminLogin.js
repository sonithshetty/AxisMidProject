import { useNavigate } from "react-router-dom";
import classes from "./AdminLogin.module.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <h1>Admin Login</h1>
      <div>
        <form>
          <div className={classes.row}>
            <div className={classes.col}>
              <label className={classes.label1} for="email">
                <b>Email : </b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <label className={classes.label2} for="psw">
                <b>Password : </b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>
          </div>

          <div className={classes.row}>
            <button
              onClick={() => {
                navigate("/admin-home");
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
