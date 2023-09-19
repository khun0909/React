// 색상 선택 컴포넌트 생성

import React from "react";
import { ColorConsumer } from "../contexts/dycolor";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }
                }
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  /* 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함 */
                  actions.setSubcolor(color);  // 오른쪽 마우스 클릭시 subcolor 변경
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
}

export default SelectColors;