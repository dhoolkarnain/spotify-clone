import "./App.css";
import RightMenu from "./Components/RightMenu/RightMenu";
import MainContainer from "./Components/MainContainer/MainContainer";
import React, { Component } from "react";
import LeftMenu from "./Components/LeftMenu/LeftMenu";

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />
      <div className="background"></div>
    </div>
  );
}

export default App;
