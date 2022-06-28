import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboardViewClasses from "./pages/AdminDashboardViewClasses";
import AdminDashboardViewUsers from "./pages/AdminDashboardViewUsers";
import TeacherClasses from "./pages/TeacherClasses";
import TeachersDashboard from "./pages/TeachersDashboard";
import AdminDashboardMain from "./pages/AdminDashboardMain";
import StudentDashboardMain from "./pages/StudentDashboardMain";
import AddStudents from "./pages/AddStudents";
import Login from "./components/forms/Login";
import { HomePage } from "./pages/Home/HomePage";
import Class from "./pages/Class";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/login" element={<Login />} />
      {/* Admin routes */}
      <Route
        exact
        path="/dashboard/admin/viewusers"
        element={<AdminDashboardViewUsers />}
      />
      <Route exact path="/dashboard/admin" element={<AdminDashboardMain />} />
      <Route
        exact
        path="/dashboard/admin/viewClasses"
        element={<AdminDashboardViewClasses />}
      />
      {/* Teacher */}
      <Route exact path="/dashboard/teacher" element={<TeachersDashboard />} />
      <Route
        exact
        path="/dashboard/teacher/viewClasses"
        element={<TeacherClasses />}
      />
      {/* student */}
      <Route
        exact
        path="/dashboard/student"
        element={<StudentDashboardMain />}
      />
      <Route
        path="/dashboard/teacher/addStudentClass/:classId/:className"
        element={<AddStudents />}
      />
      <Route
        exact
        path="/dashboard/class/:classId/:className"
        element={<Class />}
      />

      {/* user profile */}
      <Route exact path="/userProfile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
