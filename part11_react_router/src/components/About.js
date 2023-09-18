// 쿼리스트링
// useLocation() Hook을 사용하여 현재 페이지의 정보를 알수 있음
// - pathname: 현재 주소의 경로 (쿼리스트링 제외)
// - search: 맨 앞의 ? 문자 포함한 쿼리스트링 값
// - hash: 주소의 # 문자열 뒤의 값
// - state: 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
// - key: location 객체의 고유 값, 초기에는 default 이며 페이지가 변경될때마다 고유의 값이 생성됨

// useSearchParams(params1, params2) Hook을 통하여 쿼리스트링을 쉽게 파싱하여 사용가능
// - params1: 쿼리 파라미터를 조회하거나 수정하는 메소드 사용 가능 get, set
// - params2: 쿼리 파라미터를 객체 형태로 업데이트 가능

import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  // useLocation()을 통해 search 값을 받아온 후,
  const location = useLocation();  // 쿼리스트링
  const [searchParams, setSearchParams] = useSearchParams();  //쿼리스트링 파싱

  const detail = searchParams.get('detail')  // 쿼리스트링 detail 조회
  const mode = searchParams.get('mode')

  const onToggleDetail = () => {
    // setSearchParams메소드를 활용하여 객체 형태로 값 업데이트
    setSearchParams({ mode, detail: String(detail !== 'true') })
  }
  const onIncreaseMode = () => {
    const nextMode = mode === 'null' ? 1 : parseInt(mode) + 1
    setSearchParams({ mode: String(nextMode), detail })
  }

  return (
    <div>
      <h2>React 소개</h2>
      <p>사이트를 소개하는 페이지입니다._About</p>
      <p>퀄리스트링: {location.search}</p>

      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;