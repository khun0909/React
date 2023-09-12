// 컴포넌트 이름에서 대문자로 시작하는 컴포넌트는 React 컴포넌트에 해당 됨
import React from "react";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <h1>
          <a href="/">React</a>
        </h1>
      </header>
    </div>
  );
};

const Navigation = () => {
  const home = "Home";
  return (
    <div className="nav">
      <nav>
        <div>
          <a href="/">{home}</a>
        </div>
        <div>
          <a href="/create">Create</a>
        </div>
        <div>
          <a href="/update">Update</a>
        </div>
      </nav>
    </div>
  );
};

function Article() {
  return (
    <div className="art">
      <article>
        <h2>환영합니다.</h2>
      </article>
    </div>
  );
}

// export default Header;  // 하나의 컴포넌트만 내보낼 수 있음
export { Header, Navigation, Article }; // 여러개의 컴포넌트를 내보낼 수 있음
