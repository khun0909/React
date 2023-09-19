// Context API: React 프로젝트에서 전역적으로 사용할 데이터가 있을 때(로그인정보, 테마 관리, 환경 관리 등)
// stlyed-components, 리액트 라우터  => Context API을 기반으로 구현

// Context에는 Provider와 Consumer 두 개의 컴포넌트가 존재
// Provider은 Context에서 사용할 값을 설정할 때 사용
// Consumer은 설정한 값을 불러와야 할 때 사용

import React from "react";
import ColorBox from "./components/ColorBox";
// import ColorContext from "./contexts/color";
import { ColorProvider } from "./contexts/dycolor"
import SelectColors from "./components/SelectColors";
import ColorBoxCot from "./components/ColorBox_context";


function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <p>ColorBox ColorProvider/ColorConsumer 적용</p>
        <ColorBox />
        <hr />
        <p>ColorBox useContext hook 적용</p>
        <ColorBoxCot />
      </div>
    </ColorProvider>
  );
}

export default App;
