import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectList from "screens/project-list/index";
import { TsReactTest } from "try-use-array";
import { LoginScreen } from "screens/login/index";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { ProjectScreen } from "screens/project";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>React自由，vue一堆概念</>

        <Routes>
          <Route path="/" element={<TsReactTest />}></Route>
          <Route path="/LoginScreen" element={<LoginScreen />}></Route>
          <Route path="/projects" element={<ProjectList />}></Route>
          <Route
            path="/projects/:projectId"
            element={<ProjectScreen />}
          ></Route>
          <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
