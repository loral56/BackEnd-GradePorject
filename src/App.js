/*import './App.css';


function App() {
  return (
    <div >
      <Login />
    </div>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import StateCouncilPage from "./Components/StateCouncilPage/StateCouncilPage";
import NewCaseForm from "./Components/NewCaseForm/NewCaseForm";

function App() {
  return (
    <Router basename="BackEnd-GradePorject">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/" element={<StateCouncilPage />} /> {/* Default route */}
        <Route path="/NewCaseForm" element={<NewCaseForm />} />
      </Routes>
    </Router>
  );
}

export default App;
