import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Controlls from "./components/controlls/Controlls";
import About from './pages/about/About'
import Blogs from './pages/blogs/Blogs'
import Contact from './pages/contact/Contact'
import Portfolio from './pages/portfolio/Portfolio'
function App() {
  return (
    <div className="App">
      <Router>
        <Controlls />

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/portfolio" element={<Portfolio/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
