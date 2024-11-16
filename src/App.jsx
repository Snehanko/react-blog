import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header/>      
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
