import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
