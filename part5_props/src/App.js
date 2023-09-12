import "./App.css";
import React from "react";
import { NewComponent, MyComponent } from "./userComponent/NewComponent";
import {
  ClassComponent,
  MyClassComponent,
} from "./userComponent/ClassComponent";
import MyCounter from "./userComponent/Conter";
import Say from "./userComponent/Say";

function App() {
  return (
    <div className="App">
      {/* props를 직접 설정하는 방법 */}
      <NewComponent age="30" />
      <hr />
      {/* props.children: 태그 사이의 내용을 출력 */}
      <MyComponent>React!</MyComponent>
      <hr />
      <ClassComponent />
      <hr />
      <MyClassComponent>MyClassComponent!</MyClassComponent>
      <hr />
      <MyCounter>MyCounter</MyCounter>
      <hr />
      <Say />
    </div>
  );
}

export default App;
