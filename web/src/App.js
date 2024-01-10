import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//web imports
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import Signup from "./components/Signup";

// dashboard imports
import Dashboard from "./components/OperatorDashboard";
import Repair from "./components/Repair";
import Request from "./components/Request";
import Reservations from "./components/Reservations";
import Location from "./components/Location";

function NavbarLayout() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
function DashboardLayout() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NavbarLayout />}>
          <Route index element={<Carousel />} />
          <Route path="products" element={<Cards />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Request />} />
          <Route path="req" element={<Request />} />
          <Route path="stat" element={<Repair />} />
          <Route path="res" element={<Reservations />} />
          <Route path="loc" element={<Location />} />
          <Route path="settings" element={<Request />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;