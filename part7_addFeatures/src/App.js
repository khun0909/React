import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import { ValSample, RefSample } from './component//ValSample';
import { InputFocus, ScrollBox } from './component/ScrollBox';
import { UserListHtml } from './component/MapArray';
import IterationSample from './component/IterationSample'
import LifeCycle from './component/LifeCycle';

function getRandomColor() {
  const resultColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  console.log('생성컬러', resultColor);
  return resultColor
}

function App() {
  const [colors, setColors] = useState("#000000");

  const onClickColor = () => {
    const colorData = getRandomColor();
    setColors(colorData)
  }

  return (
    <div className="App">
      <button onClick={onClickColor}>램덤 색상</button>
      <LifeCycle color={colors} />
    </div>
  );
}

export default App