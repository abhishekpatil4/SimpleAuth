import { useState } from 'react'
import './App.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './config/Firebase';

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  return (
    <>
      <BrowserRouter>
        <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
