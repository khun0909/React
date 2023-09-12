import React from "react";
import "./App.css";
import hello from "./hello";

// 함수형 컴포넌트
function app() {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <div className="react" style={style}>
      <h1>안녕하세요. React 학습중입니다.</h1>
      <div id="aaa">{name}</div> {/* 주석문 */}
      <input />
    </div>
  );
}
export default app;
