// useMemo: 연산한 값 재사용
// useCallback: useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, 
//              useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용

import React, { useState, useMemo, useCallback } from 'react';

const getAverage = list => {
    console.log("Average 계산 중...");
    if (list.length === 0) return 0;
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
};

const AverageMemo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    // const onChange = (e) => {
    //     setNumber(e.target.value);   // input 이 변할 때마다 number 를 바꿔줌
    // }
    // const onInsert = () => {
    //     const nextList = list.concat(parseInt(number)); // 등록 버튼 눌렀을 때의 number 값을 기존 list 값에 추가
    //     setList(nextList);                              // 추가한 배열을 state 의 list 에 assign
    //     setNumber("");                                  // number 초기화
    // }

    // useCallback 함수 적용
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    }, [number, list]);

    // useMemo 함수 적용
    const avg = useMemo(() => getAverage(list), [list]); // 두번째 배열내의 값이 하나라도 변경되면
    // 첫번째 매개변수인 callback fn 을 실행한다.

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* <b>Average : </b>{getAverage(list)}     function 외부의 코드는 왜 계속 실행되지 ?  (input 의 onChange 내의 setter 때문에 컴포넌트가 계속 rerender 되기 때문 !) */}
                <b>Average : </b> {avg} {/*useMemo 사용 ! */}
            </div>
        </div>
    );
};

export default AverageMemo;