import React from "react";
import PropTypes from "prop-types";

// props를 받아서 사용하는 방법
// props는 부모 컴포넌트에서만 수정할 수 있다.
const NewComponent = (props) => {
  return (
    <>
      <h1>Hello React!</h1>
      <p>나의 이름은 "{props.name}"입니다.</p>
      <p>나이는 "{props.age}" 이며,</p>
      <p>성별은 "{props.gender}" 입니다.</p>
      <br />
      {/* children 값은 props로 받아서 사용할 수 있다. */}
      <p>children 값은 "{props.children}" 입니다.</p>
    </>
  );
};

// 비구조화 할당을 사용하여 props를 받아서 사용하는 방법
// 비구조화 할당: 배열이나 객체 속성을 해체하여 개별 변수에 값을 담을 수 있는 JavaScript 표현식
const MyComponent = (props) => {
  const { name, age, children } = props;
  return (
    <>
      나의 이름은 "{name}" 이며, 나이는 "{age}" 입니다.
      <br />
      children 값은 "{children}" 입니다.
    </>
  );
};

//**** defaultProps, propTypes 등 지정은 Component 하단에서 정의 *****/

// props의 기본값을 설정하는 방법
NewComponent.defaultProps = {
  name: 20,
  age: "30",
  gender: "남",
};

MyComponent.defaultProps = {
  name: "미등록자",
  age: "--",
};

// props의 타입을 검사: PropTypes 사용해 확인
NewComponent.propTypes = {
  name: PropTypes.string, // 필수: PropTypes.string.isRequired
};

export { NewComponent, MyComponent };
