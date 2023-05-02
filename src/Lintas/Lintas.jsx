import React from "react";
import Sidebar from "./SideBar/Sidebar";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import FixedAR from "./Pages/FixedAR";
import { Master, Master1, Master2, Master3, Master4 } from "./Pages/Master";

const Lintas = () => {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/FixedAR" element={<FixedAR/>}/>
        <Route path="/Master" element={<Master/>} />
        <Route path="/Master/Master1" element={<Master1/>} />
        <Route path="/Master/Master2" element={<Master2/>} />
        <Route path="/Master/Master3" element={<Master3/>} />
        <Route path="/Master/Master4" element={<Master4/>} />
      </Routes>
    </Router>
  );
};

export default Lintas;
