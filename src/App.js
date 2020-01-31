import React from 'react';
import TopBar from './components/TopBar';
import AboutMe from "./components/AboutMe"
import ProjectGallery from "./components/ProjectGallery";

import './App.css';

function App() {
  return (
    <div className="App flex-col">
    <TopBar />
    <AboutMe />
    <ProjectGallery />
    </div>
  );
}

export default App;
