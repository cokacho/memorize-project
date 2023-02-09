import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path={'/'} element={<Home />}/>
          <Route path={'/about'} element={<About />}/>
        </Route>
        <Route path={'/game'} element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
