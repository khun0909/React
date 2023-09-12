import React, { Component } from "react";

class MyCounter extends Component {
  constructor(props) {
    super(props);
    // state : 리액트에서 state 는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
    this.state = {
      number: 0,
    };
  }

  // 이벤트 핸들링
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>Conut: {number}</h1>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default MyCounter;
