import { Route, Router } from "react-router";
import "./App.css";
import { Routes } from "react-router";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import DashBoard from "./pages/DashBoard";
import Bookings from "./pages/Bookings";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/bookings" element={<Bookings />} />
      </Route>
    </Routes>
  );
}

export default App;
