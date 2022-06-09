import { Router, Routes } from "react-router-dom";
import "./App.css";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <TeacherDashboard />
    </div>
  );
}

export default App;
