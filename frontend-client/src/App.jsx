import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import MyBookings from "./pages/MyBookings";
import Footer from "./components/Footer";
import Layout from "./pages/Owner/Layout";
import AddCard from "./pages/Owner/AddCard";
import ManageCards from "./pages/Owner/ManageCards";
import ManageBookings from "./pages/Owner/ManageBookings";
import Dashboard from "./pages/Owner/Dashboard";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { UseAppContext } from "./context/AppContext";

function App() {
  const {showLogin} = UseAppContext();
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <>
    <Toaster/>

    {showLogin && <Login />}
    
      {!isOwnerPath && <Navbar/>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars-details/:id" element={<CarDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/owner" element={<Layout />}>
          <Route path="/owner/dashboard" element={<Dashboard />} />
          <Route path="/owner/add-car" element={<AddCard />} />
          <Route path="/owner/manage-cars" element={<ManageCards />} />
          <Route path="/owner/manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>
      {!isOwnerPath && <Footer />}
    </>
  );
}

export default App;
