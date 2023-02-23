import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.";
import StudentLogin from "./components/StudentLogin";
import AdminLogin from "./components/AdminLogin";
import TeacherLogin from "./components/TeacherLogin";
import AdminHome from "./components/AdminHome";
import StudentHome from "./components/StudentHome";
import TeacherHome from "./components/TeacherHome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/student-home" element={<StudentHome />} />
        <Route path="/teacher-home" element={<TeacherHome />} />
      </Routes>
    </div>
  );
}

export default App;
