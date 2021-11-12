import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreen } from 'pages/project-list';
import { LoginScreen } from 'pages/login';

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen/> */}
      <LoginScreen/>
    </div>
  );
}

export default App;
