import axios from "axios";
import { useEffect, useState } from "react";
const StudentHome = () => {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8081/students").then((response) => {
      setStudent(response.data);
      localStorage.setItem("students", JSON.stringify(student));
    });
  }, []);
  return (
    <div>
      <h1>TITLE</h1>
      {student.map((ele) => {
        return (
          <>
            <p>{ele.email}</p>
          </>
        );
      })}
    </div>
  );
};

export default StudentHome;
