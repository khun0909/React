// 특정  DOM을 선택하는 상황에서 사용: ref, createRef / useRef  => Hook 함수

import React , {Component} from "react";
import '../ValSample.css'

class ValSample extends Component {
  // const [password, setPassword] =useState("")
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChang = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  hendleButClick = (e) =>{
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    })
    this.input.focus()
  }

  render () {
    return(
      <div>
        <input ref={(ref) => this.input=ref}
          type='password' value={this.state.password} 
          onChange={this.handleChang} 
          className={ 
              this.state.clicked  
                ?this.state.validated
                  ? 'success' 
                  : 'failure'
              :''
              } 
          />
          <button onClick={this.hendleButClick}>확 인</button>
      </div>
  )
  }
}

class RefSample extends Component {
  // createRef 함수를 이용해 ref 생성
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus()
  }

  render() {
    return (
      <>
        <input ref={this.input}></input>
      </>
    )
  }  
}

export {ValSample, RefSample};
