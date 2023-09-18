// 배열형 자료 처리

import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>{user.email}</span>
    </div>
  )
}

function UserListHtml() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  // 자바스크립트 배열: map()함수사용하여 반복되는 컴포넌트를 렌더링 할 수 있음
  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}

      {/* 자바스크립트 배열 map() 함수*/}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      {/* 고유값이 없다면 map()함수의 두번째 인자인 index 사용
          index: 배열의 index 값 */}
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  )
}

export { UserListHtml };