import Login from "./page/Login";
import { Routes, Route, } from "react-router-dom";
import Employee from "./page/ManageDataBasic/Employee.js";
import Department from "./page/ManageDataBasic/Department.js";
import Home from './page/Home.js'
import './App.css'
import Position from "./page/ManageDataBasic/Position.js";
import User from "./page/ManageDataBasic/User.js";
import OrgMovPos from "./page/stucture_org/Change_position.js";
import EmUpdate from "./page/ManageDataBasic/EmUpdate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/employee" element={<Employee />} />
        <Route exact path="/employeeUpdate/:emp_ID" element={<EmUpdate />} />
        <Route exact path="/department" element={<Department />} />
        <Route exact path="/position" element={<Position />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/organization/moving/position_department" element={<OrgMovPos />} />
        <Route exact path="/home" element={<Home/>} />

      </Routes>

    </div>
  );
}

export default App;
