import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <header>
        <h1>리액트를 이용한 라우터 기능 구현</h1>
      </header>
      <hr />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/user1">User1의 프로필</Link></li>
          <li><Link to="/users/user2">User2의 프로필</Link></li>
          <li><Link to="/articles">게시판</Link></li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Menu