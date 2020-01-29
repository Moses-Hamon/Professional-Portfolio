import React from 'react';
import TopBar from './components/TopBar';
import AboutMe from "./components/AboutMe"
import './App.css';

function App() {
  return (
    <div className="App flex-col">
    <TopBar />
    <AboutMe />
    </div>
  );
}

export default App;
