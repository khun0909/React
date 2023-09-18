import React, {useState, useRef, Component} from "react";

const InputFocus = () => {
    const [inputs, setInputs] = useState({
        name:"",
        email: "",
    });

    const nameInput = useRef();
    const {name, email} = inputs;  //비구조화 할당을 통한 값 추출

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const onReset = (e) => {
        setInputs({
            name:"",
            email: "",
        });
        nameInput.current.focus();
    }

    return(
        <div>
            <input name='name' placeholder="이름" value={name} ref={nameInput} onChange={onChange} />
            <input name='email' placeholder="이메일" value={email} onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                {name}, {email}
            </div>
        </div>
    );
}

class ScrollBox extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative',
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)',
        };

        return (
            <div style={style} 
                ref={(ref) =>{
                    this.box = ref
                }
            }>
                <div style={innerStyle}></div>
            </div>
        );
    }
};


export {InputFocus, ScrollBox};