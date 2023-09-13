// 클래스형 컴포넌트 및 props 사용하기
// Path: src/userComponent/ClassComponent.js
// 클래스형 컴포넌트: state 기능 및 라이프사이클 기능 사용 가능
// defaultProps 와 propTypes 는 기존방식과 동일한 방식으로 설정

import React, { Component } from "react";
import PropTypes from "prop-types";

// defaultProps, propTypes 등 지정은 Component 하단에서 정의
class ClassComponent extends Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <>
        나의 이름은 "{name}" 이며, 나이는 "{age}" 입니다.
        <br />
        children 값은 "{children}" 입니다.
      </>
    );
  }
}

class MyClassComponent extends Component {
  // defaultProps, propTypes를 static 키워드를 사용하여 클래스 내부에 정의
  // static: 클래스의 속성을 정의할 때 사용
  static defaultProps = { name: "미등록자", age: "--" };
  static propTypes = { name: PropTypes.string.isRequired };

  render() {
    const { name, age, children } = this.props;
    return (
      <>
        나의 이름은 "{name}" 이며, 나이는 "{age}" 입니다.
        <br />
        children 값은 "{children}" 입니다.
      </>
    );
  }
}

ClassComponent.defaultProps = {
  name: "미등록자",
  age: "--",
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export { ClassComponent, MyClassComponent };
