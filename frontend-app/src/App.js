import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboardViewUsers from "./pages/AdminDashboardViewUsers";
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
          path="/dashboard/teacher"
          element={<TeachersDashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
