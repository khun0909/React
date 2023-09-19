// Context에는 Provider와 Consumer 두 개의 컴포넌트가 존재
// Provider은 Context에서 사용할 값을 설정할 때 사용
// Consumer은 설정한 값을 불러와야 할 때 사용

import { createContext } from "react";

const ColorContext = createContext({ color: 'black' });

export default ColorContext