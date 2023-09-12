// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import React from "react";
import Hello from "./hello";
import './App.css';

// const Hello = require("./hello");

// JSX 문법: HTML 태그를 사용할 수 있다.(컴포너트)
function App() {
  return (
    // <div className="class" id='id' >  {/* 상위 노드로 감싸주어야 함 */}
    <>  {/* 상위 노드로 감싸주어야 함: div 생략*/}
      <input type="text" placeholder="입력해주세요."/>
      <Hello />
      <Hello />
      <br/><hr/> {/* 주석문 */}
      <Hello />
    </>
    // </div>
  );
}

export default App;
