import React from "react";
import styled, { css } from "styled-components";
// polished 패키지: lighten() 또는 darken() 과 같은 유틸 함수를 사용할수 있도록 해줌
import { lighten, darken } from "polished";


// props를 가변형 스타일링1  **********************************
const StyledButton1 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
`;

const Button1 = ({ children, color, background }) => {
    return (
        <StyledButton1 color={color} background={background} Î>
            {children}
        </StyledButton1>
    );
}

// props를 가변형 스타일링2 **************************
// Styled Components에서 제공하는 css 함수를 사용해서 여러 개의 CSS 속성을 묶어서 정의 가능
const StyledButton2 = styled.button`
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;

  // primary prop이 존재하는 경우에만 css로 정의된 스타일이 적용
  ${(props) => {
        const selected = props.theme.palette.pink;
        return css`
            blackground: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }    
            &:active {
                background: ${darken(0.1, selected)};
            }
    `
    }}
`;

const Button2 = ({ children, ...props }) => {
    return (
        <StyledButton2 {...props}>
            {children}
        </StyledButton2>
    );
}

export { Button1, Button2 };