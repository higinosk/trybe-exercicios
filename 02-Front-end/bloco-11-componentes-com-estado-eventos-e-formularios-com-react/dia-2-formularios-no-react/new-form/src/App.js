import React from "react";
import logo from './trybe-logo.svg';
import './App.css';
import Login from "./components/Login";
import Registro from "./components/Registro";

function App() {
  return (
    <>
    <header>
    <img src={ logo } alt="" srcSet="" />
    </header>
    <main className="app">
      <Login />
      < Registro />
    </main>
    </>
  );
};

export default App;