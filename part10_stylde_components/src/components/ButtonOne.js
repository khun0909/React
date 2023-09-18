// styled-components: 동일한 컴포넌트에서 컴포넌트 이름을 쓰듯 스타일을 지정하는 것
// 장점: css 파일을 밖에 두지 않고, 컴포넌트 내부에 넣기 때문에, css가 전역으로 중첩되지 않도록 만들어주는 장점
// 

import React from "react";
import styled from "styled-components";

// HTML 요소 스타일링(고정 스타일링)
// styled Components 만들기: const 컴포넌트명 = styled.태그명 `스타일 문법`
const ButtonOne = styled.button`
  padding: 6px 12px;
  margin: 10px;
  border: 2px solid orange;
  color: orange;
  font-size: 16px;    
`;

// React 컴포넌트 스타일링(가변 스타일링)
// const 컴포넌트명 = styled(StyledButton)`스타일 문법`
// 특정 컴포넌트를 인수로 전달받아 해당 컴포넌트의 CSS 스타일을 확장할 수 있다.
// 인수로 연결된 컴포넌트의 스타일을 그대로 상속받고 이후 스타일을 변경하거나 추가한다.
const ButtonTwo = styled(ButtonOne)`
  border: 4px solid green;
  color: green;
  background: #f9f9f9;
`;

export { ButtonOne, ButtonTwo };