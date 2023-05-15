
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import Cushome from "./Component/CHome/home";
import AdminHome from "./Component/AdminHome";

import CusPackages from './Component/CHome/packages';
import Login from "./Component/auth/Login";
import Register from "./Component/auth/Register";

import Transreport from './Component/GenTranRepo';
import React from 'react';
import AllShedulles from "./Component/Allshedulle";
import AddShedullesinfo from "./Component/Addshedulle";
import EditShedulles from './Component/Edit'
import issues from "./Component/issues";
import Issues from "./Component/issues";


function App() {
  return (
    <Router>
    <Routes>
    <Route path = "/" element ={<Cushome/>} />
    <Route path = "/add" element ={<AddShedullesinfo/>} />
    <Route path = "/Home" element = {<AdminHome/>} />
    <Route path = "/all" element = {<AllShedulles/>} />
    <Route path = "/vehicles" element = {<CusPackages/>} />
    <Route path = "/TransRepo" element = {<Transreport/>} />
    <Route path = "/Log" element = {<Login/>} />
     <Route path = "/Reg" element = {<Register/>} />
     <Route path = "/Update/:id" element = {<EditShedulles/>} />
     <Route path = "/issues" element = {<Issues />} />


    </Routes>
    </Router>
  );
}

export default App;
