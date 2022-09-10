import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Dashboard/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
