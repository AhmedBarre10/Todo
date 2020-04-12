import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Form from "./form" 


function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          Tasks
        </ul>
      </nav>
     <Form/>             
    </div>
  );
}

export default App;
