import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboardViewClasses from "./pages/AdminDashboardViewClasses";
import AdminDashboardViewUsers from "./pages/AdminDashboardViewUsers";
import TeacherClasses from "./pages/TeacherClasses";
import TeachersDashboard from "./pages/TeachersDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
