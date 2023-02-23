import { useNavigate } from "react-router-dom";
import classes from "./TeacherLogin.module.css";

const TeacherLogin = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <h1>Teacher Login</h1>
      <div>
        <form>
          <div className={classes.row}>
            <div className={classes.col}>
              <label className={classes.label1} for="email">
                <b>Email : </b>
              </label>
              <input type="email" placeholder="Enter Email" name="email" />
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.col}>
              <label className={classes.label2} for="psw">
                <b>Password : </b>
              </label>
              <input type="password" placeholder="Enter Password" name="psw" />
            </div>
          </div>
          <div className={classes.row}>
            <button
              onClick={() => {
                navigate("/teacher-home");
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

export default TeacherLogin;
