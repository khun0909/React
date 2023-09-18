// useEffect: 컴포넌트가 마운트 됐을 때 (처음 나타났을 때), 언마운트 됐을 때 (사라질 때), 
//            업데이트 될 때 (특정 props가 바뀔 때) 할 작업 설정

import React, { useState, useEffect } from 'react';

const InfoEf = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // useEffect(() => {
    //     alert('접속을 환영합니다.'); ㅔ
    //     console.log('컴포너트가 화면에 출력(렌더링 완료)');
    // }, []);

    useEffect(() => {
        console.log('이메일이 변경됩니다.');
    }, [email]);

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

export default InfoEf;