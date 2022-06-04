import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavbarComponent from "./components/navbar/NavbarComponent";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Sidebar />
    </div>
  );
}

export default App;
