import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Dispatcher from './Dispatcher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddTeam from './AddTeam';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dispatcher" element={<Dispatcher />} />
        <Route path="addteam" element={<AddTeam />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;