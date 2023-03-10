import React from "react";
import ProjectList from "screens/project-list/index";
import Home from "screens/home";
import { LoginScreen } from "screens/login/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { ProjectScreen } from "screens/project";
import TemplateDetail from "./screens/TemplateDetail/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/template/:templateId"
          element={<TemplateDetail />}
        ></Route>

        <Route path="/LoginScreen" element={<LoginScreen />}></Route>
        <Route path="/projects" element={<ProjectList />}></Route>
        <Route path="/projects/:projectId" element={<ProjectScreen />}></Route>
        <Route path="*" element={<Navigate to="/" replace={true} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
