import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectList from "screens/project-list/index";
import { TsReactTest } from "try-use-array";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>React自由，vue一堆概念</>
        {/* <TsReactTest />  */}
        <ProjectList />
      </header>
    </div>
  );
}

export default App;
