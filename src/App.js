import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import User from './components/User';
import UserDetail from './components/UserDetail';
import './App.css';

 const App = ()=> { 
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<User />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
