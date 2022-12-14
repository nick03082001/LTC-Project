import Login from "./page/Login";
import { Routes, Route, } from "react-router-dom";
import Employee from "./page/ManageDataBasic/Employee.js";
import Department from "./page/ManageDataBasic/Department.js";
import Home from './page/Home.js'
import './App.css'
import Session from "./page/ManageDataBasic/Session.js";
import Position from "./page/ManageDataBasic/Position.js";
import User from "./page/ManageDataBasic/User.js";
import OrgMovPos from "./page/stucture_org/Change_position.js";
import HistoryChangePos from "./page/stucture_org/History_change_pos.js";
import ManageAssessment from "./page/ManageAssessment/ManageAssessment.js";
import CreateAssessment from "./page/ManageAssessment/CreateAssessment.js";
import UpdateAssesment from "./page/ManageAssessment/UpdateAssesment.js";
import SelectAnswerAssessment from "./page/ManageAssessment/SelectAnswerAssessment.js";
import SaveAnswerAssessment from "./page/ManageAssessment/SaveAnswerAssessment.js";
import ReportScoreAss from "./page/Report/ReportScoreAss.js";
import ReportScoreAssDetial from "./page/Report/ReportScoreAssDetial.js";




import PrivateRoute from "./utils/PrivateRoute";
import Error from './page/error404.js'


function App() {
  return (
    <div className="App">
      <Routes>
      {/* <Route element = {< PrivateRoute/>}> */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/employee" element={<Employee />} />
        <Route exact path="/session" element={<Session />} />
        <Route exact path="/department" element={<Department />} />
        <Route exact path="/position" element={<Position />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/organization/moving/position_department" element={<OrgMovPos />} />
        <Route exact path="/organization/moving/position_department/history" element={<HistoryChangePos />} />
        <Route exact path="/assessment/manage" element={<ManageAssessment />} />
        <Route exact path="/assessment/create" element={<CreateAssessment />} />
        <Route exact path="/assessment/update" element={<UpdateAssesment />} />
        <Route exact path="/assessment/answer" element={<SelectAnswerAssessment />} />
        <Route exact path="/assessment/save/answer" element={<SaveAnswerAssessment />} />
        <Route exact path="/report/score_assessment" element={<ReportScoreAss />} />
        <Route exact path="/report/ReportScoreAssDetial" element={<ReportScoreAssDetial />} />
        <Route exact path="/home" element={<Home/>} />
        {/* </Route> */}
        
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;