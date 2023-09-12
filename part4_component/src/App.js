// 컴포넌트란?
// 리액트에서 컴포넌트는 UI를 구성하는 개별적인 블록을 의미
// 컴포넌트를 통해 코드의 재사용성을 높이고, 유지보수를 쉽게 할 수 있음
// 데이터에 따라 UI를 만들어주고 , 라이프사이클 API를 이용해 컴포넌트가
// 화면에서 나타날 때, 사라질 때, 변화가 일어날 때 주어진 작업을 처리하고,
// 임의 메서드로 특별한 기능을 붙여줄 수 있다.

// // 클래스형 컴포넌트
// class App extends Component {
//   render() { // render 함수는 클래스형 컴포넌트에서 꼭 있어야 하는 유일한 함수, JSX를 반환
//     const name = "React";
//     return <div className="react">{name}</div>;
//   }
// }

import React from "react";
import "./App.css";
import NewComponent from "./MyComponent";
// import Header from "./Header";    // 하나의 컴포넌트만 불러올 때
// import { Header, Navigation, Article } from "./Header";  // 여러개의 컴포넌트를 불러올 때
import * as Comp from "./Header"; // 여러개의 컴포넌트를 불러올 때

// 함수형 컴포넌트
const App = () => {
  return (
    <div>
      <Comp.Header />
      <Comp.Navigation />
      <Comp.Article />
      <NewComponent />
    </div>
  );
};

export default App;


