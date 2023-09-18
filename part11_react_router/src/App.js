import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Menu from "./components/Menu";
import Articles from "./components/Articles";
import Article from "./components/Article";

// 라우터 연결: React Router V6
{/* 
  <Routes>
    <Route path="경로" element={<컴포넌트 />} />
  </Routes> 
*/}

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:username" element={<Users />} />
        <Route path="/articles" element={<Articles />} />  {/* 기본 URL*/}
        <Route path='/articles/:id' element={<Article />} />  {/* 하위 URL*/}
      </Routes>
    </div>
  );
}

export default App;
