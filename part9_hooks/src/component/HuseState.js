// Hooks: 리액트 v16.8에 새로 도입된 기능으로 기존의 함수형 컴포넌트에서 할 수 없었던
//        다양한 작업을 할 수 있게 해 준다.
// useState: 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 준다.
//  - const [value, setValue] = useState(0);  => setValue: Setter 함수

import React, { useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div>
      <div>
        <input type='text' value={name} onChange={onChangeName} />
        <input type='text' value={email} onChange={onChangeEmail} />
      </div>
      <div>
        <p>이름: {name}, 이메일: {email}</p>
      </div>
    </div>
  );

}

export default Info;