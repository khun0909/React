// 이벤트: DOM 요소에만 이벤트를 설정할 수 있다.
// 일반적: <input type="button" onclick="함수 호출"></input>
// 리액트: <input type="button" onClick={함수 호출}></input>
//리액트 컴포넌트에는 자체적으로 이벤트를 설정할 수 없다.

// <MyComponent onClick={함수}>
// => MyComponent에서 onClick이벤트를 받아서 사용할 수 있도록 props로 설정해야 한다.
// <div onClick={this.props.onClick}> .... </div>

import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        {/* input요소를 이용한 onChange 이벤트 */}
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message} // input요소의 value값을 state의 message값으로 설정
          onChange={(env) => {
            this.setState({
              // onChange 이벤트가 발생할 때마다 state의 message값을 업데이트
              message: env.target.value,
            });
          }}
        />
        {/* 버튼을 이용한 onClick 이벤트 */}
        <button
          onClick={() => {
            // onClick 이벤트가 발생하면 state의 message값을 alert으로 출력
            alert(this.state.message);
            this.setState({
              // state의 message값을 초기화
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
