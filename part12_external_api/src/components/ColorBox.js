// Context에는 Provider와 Consumer 두 개의 컴포넌트가 존재
// Provider은 Context에서 사용할 값을 설정할 때 사용
// Consumer은 설정한 값을 불러와야 할 때 사용

import ColorContext from "../contexts/color";


// const ColorBox = () => {
//   return (
//     <ColorContext.Consumer>
//       {value => (
//         <div
//           style={{
//             width: '64px',
//             height: '64px',
//             background: value.color
//           }} />
//       )}
//     </ColorContext.Consumer>
//   );
// }

import React from "react";
import { ColorConsumer } from '../contexts/dycolor'

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;