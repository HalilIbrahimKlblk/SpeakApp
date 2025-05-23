import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Exercise from './pages/Exercise/Exercise';
import Game from './pages/Game/Game';
import Login from './pages/Login/Login';
import Logon from './pages/Logon/Logon';
import NotFound from './pages/NotFound/NotFound';
import MainLayout from './layouts/MainLayout';
import EmptyLayout from './layouts/EmptyLayout';
import ChatBot from './components/ChatBot/ChatBot';
import Hunt from './pages/Hunt/Hunt';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ana sayfa - Navbar ve Footer var */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/About" element={<MainLayout><About /></MainLayout>} />
          <Route path="/Exercise" element={<MainLayout><Exercise /></MainLayout>} />
          <Route path="/Game" element={<MainLayout><Game /></MainLayout>} />
          {/* 404 sayfası - Navbar ve Footer yok */}
          <Route path="*" element={<EmptyLayout><NotFound /></EmptyLayout>} />
          <Route path="/Login" element={<EmptyLayout><Login /></EmptyLayout>} />
          <Route path="/Logon" element={<EmptyLayout><Logon /></EmptyLayout>} />
          <Route path="/Hunt" element={<EmptyLayout><Hunt/></EmptyLayout>} />
        </Routes>
      </BrowserRouter>
      <ChatBot/>
    </>
  );
};

export default App;