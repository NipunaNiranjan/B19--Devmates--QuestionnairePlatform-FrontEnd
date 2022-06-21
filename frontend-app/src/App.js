import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboardViewClasses from "./pages/AdminDashboardViewClasses";
import AdminDashboardViewUsers from "./pages/AdminDashboardViewUsers";
import TeacherClasses from "./pages/TeacherClasses";
import TeachersDashboard from "./pages/TeachersDashboard";
import Login from "./components/Login";
import AdminDashboardMain from "./pages/AdminDashboardMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/dashboard/admin/viewusers"
          element={<AdminDashboardViewUsers />}
        />
        <Route
          exact
          path="/dashboard/admin/viewClasses"
          element={<AdminDashboardViewClasses />}
        />
        <Route
          exact
          path="/dashboard/teacher"
          element={<TeachersDashboard />}
        />
        <Route
          exact
          path="/dashboard/teacher/viewClasses"
          element={<TeacherClasses />}
        />
        <Route exact path="/dashboard/admin" element={<AdminDashboardMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
