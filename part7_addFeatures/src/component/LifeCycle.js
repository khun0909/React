// 라이프사이클 
// 컴포넌트에 대한 수명 주기(라이프 사이클)
// 컴포넌트를 처음으로 렌더링할 때 혹은 컴포넌트를 업데이트하기전/후로 어떤 작업을 처리 등


// 라이프사이클 메서드
// Will 접두사 - 어떤 작업을 작동하기 전에 실행되는 메서드
// Did 접두사 - 어떤 작업을 작동한 후에 실행되는 메서드

// 1. 마운트 : 페이지에 컴포넌트가 나타남(DOM생성하고 웹 브라우저상에 나타내는 것)
//  - constructor 메서드 : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
//  - getDerivedStateFromProps 메서드 : props 에 있는 값을 state 에 넣을 때사용하는 메서드
//  - render 메서드 : 준비한 UI를 렌더링하는 메서드
//  - componentDidMount 메서드 : 컴포넌트가 웹 브라우저상에 나타난 후에 호출하는메서드

// 2. 업데이트 : 컴포넌트 정보를 업데이트(리렌더링)
//  - props 가 바뀔 때
//  - state 가 바뀔 때
//  - 부모 컴포넌트가 리렌더링될 때
//  - this.forceUpdate 로 강제로 렌더링을 트리거할 때
//  - 업데이터 메소스
//    getDerivedStateFromProps 메서드 : props 에 있는 값을 state 에 넣을 때사용하는 메서드 (마운트에서도 호출됨)
//    shouldComponentUpdate 메서드 : 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드 ( true 를 반환하면 리렌더링, false 면 리렌더링 하지 않음.)
//    render 메서드 : 준비한 UI를 렌더링하는 메서드
//    getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 직전에 호출하는 메서드
//    componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

// 3. 언마운트 : 페이지에서 컴포넌트가 사라짐(DOM에서 컴퍼넌트 제거하는 것)
//   - componentWIllUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는메서드

// 라이프사이클 메서드 사용
import React, { Component } from "react";

class LifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  // 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
  constructor(props) {
    super(props) // 부보 클래스의 생성자 참조
    console.log('constructor')
  }

  // props 에 있는 값을 state 에 넣을 때사용하는 메서드
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트가 웹 브라우저상에 나타난 후에 호출하는메서드
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 컴포넌트가 리렌더링을 해야 할지 말아야 할지를 결정하는 메서드
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  // 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 컴포넌트 변화를 DOM에 반영하기 직전에 호출하는 메서드
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  onClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    console.log('render 메서드', this.props.color)
    const style = {
      color: this.props.color
    }

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.onClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycle;