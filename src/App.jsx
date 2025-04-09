// src/App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import Footer from './Component/Footer';
import MainChat from './chat/MainChat';
import Home from './Component/Home';
import './Navbar.css';
import FNavbar from './Component/FNavbar';

import FreeKundali from './Free Kundali/FreeKundali';
import BasicKundali from './Free Kundali/BasicKundali';
import Layout from './Layout';

function App() {

  const [showChat, setShowChat] = useState(false);

  const handleChatClick = () => {
    setShowChat(true);
  };



  return (
    <div>



      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />

          <Route path="/chat" element={<MainChat />} />
          <Route path="/FreeKundali" element={<FreeKundali />} />
          <Route path="/basic-kundali" element={<BasicKundali />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;