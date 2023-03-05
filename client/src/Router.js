import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={LandingPage()}/>
        <Route path="/login" element={LoginPage()}/>
        <Route path="/register" element={RegisterPage()} />
        <Route path="*" element={NotFound()}/>
      </Routes>
    </>
  );
}

export default Router;