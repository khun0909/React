// 함수형 컴포넌트에서 state를 사용하기 위해 useState를 불러옵니다.
// React 16.8 이후에서만 사용 가능합니다.(Hooks 사용)

import React, { useState } from "react";

const Say = () => {
  // useState: 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줌
  // 함수를 호출하면 배열이 반환된다.
  // 첫번째 인자(message)는 현재 상태, 두번째 인자(setMessage)는 상태를 바꾸어 주는 함수(Setter 함수)
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");
  // color를 직접 변경시 값이 변경되지 않음, 따라서 Setter 함수를 사용하여 변경해야 함

  return (
    <>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Exit</button>

      {/* JSX inline style 문법: style={ 객체 }, style={{ color }} */}
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        \ Red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        Green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        Blou
      </button>
    </>
  );
};

export default Say;
