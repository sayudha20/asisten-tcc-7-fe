import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser.jsx";
import Navbar from "./components/NavBar.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/DashBoard.jsx";
import Register from "./components/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
