import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import KnowledgeRepository from "./pages/KnowledgeRepository";
import KnowledgeLeaderboard from "./pages/KnowledgeLeaderboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/repository" element={<KnowledgeRepository />} />
              <Route path="/leaderboard" element={<KnowledgeLeaderboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
