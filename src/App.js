
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Cushome from "./Component/CHome/home";
import Schedule from "./Component/Schedule";
import VehicleAdmin from "./Component/Vehicle/vehicleAdmin";

import Packages from "./Component/CHome/packages";
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";

import Transreport from './Component/GenTranRepo';
import React from 'react';
import AllShedulles from "./Component/Allshedulle";
import AddShedullesinfo from "./Component/Addshedulle";
import EditShedulles from './Component/Edit'

import Index from "./Component";



function App() {
  return (
    <Router>
    <Routes>
    <Route path = "/" element ={<Home/>} />
    <Route path = "/add" element ={<AddShedullesinfo/>} />
    <Route path = "/schedule" element = {<Schedule/>} />
    <Route path = "/vehicleAdmin" element = {<VehicleAdmin/>} />
    <Route path = "/all" element = {<AllShedulles/>} />
    <Route path = "/sh" element = {<Packages/>} />
    <Route path = "/TransRepo" element = {<Transreport/>} />
    <Route path = "/Log" element = {<Login/>} />
     <Route path = "/Reg" element = {<Register/>} />
     <Route path = "/Update/:id" element = {<EditShedulles/>} />
     
     <Route path="/Index" element = {<Index />} />


    </Routes>
    </Router>
  );
}

export default App;
