// 기존 자바스크립트 배열로 컴포넌트 배열 생성 및 활용
// Key : 리액트에서 key는 컴포넌트 배열을 렌더링 했을 때, 
//       어떤 원소에 변동이 있었는지 식별하는 것을 돕는데 사용되는 속성

import React, { useState } from "react";

const IterationSampleB = () => {
  const names = ['교재', '리액트', '자바스크립트', '파이썬']
  const nameLists = names.map((name, index) =>
    <li key={index}>{name}</li>)  // index는 가능한 사용하지 않는다.
  return (
    <ul>
      {nameLists}
    </ul>
  )
}

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, title: '교재' },
    { id: 2, title: '리액트' },
    { id: 3, title: '자바스크립트' },
    { id: 4, title: '파이썬' }
  ]);

  const [nextId, setNextId] = useState(5);  // 추가되는 데이터 id
  const [inputText, setInputText] = useState('');  // 새로운 값 추가시 사용

  // 추가기능
  const onChange = (e) => setInputText(e.target.value)
  const onClick = (e) => {
    const nextNames = names.concat({  // 기존데이터 + 추가데이터
      id: nextId,
      title: inputText
    });
    setNextId(nextId + 1);    // 새로운 데이터에 대한 ID 생성
    setNames(nextNames);       // 추가된 데이터로 name 값 업데이트
    setInputText('');         // 다음 데이터를 위해 초기화
  }

  // 삭제기능
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id) // id와 다른 값만 추출
    setNames(nextNames)
  }

  // 배열함수(map())을 이용한 데이터 변형
  const nameLists = names.map((name) =>
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.title}
    </li>)  // index는 가능한 사용하지 않는다.

  return (
    <>
      <input type='text' value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameLists}</ul>
    </>
  )
}

export default IterationSample;