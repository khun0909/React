// URL 파라미터: Link에서 /users/user1 과 같이 값을 props로 받아 조회
// Route path='/users/:username' : path에 파라미터 이름 전달
import { useParams } from "react-router-dom";

const data = {
  user1: {
    name: '홍길동',
    desc: '고전 소설에 나오는 주인공 이름입니다.'
  },
  user2: {
    name: '리액트',
    desc: '웹 사이트 구축을 위한 플랫폼입니다.'
  }
};

const Users = () => {
  // const { username } = match.Params() : v5 이전
  const { username } = useParams();
  const profile = data[username]

  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>
  }
  return (
    <div>
      <h2>{username}({profile.name})</h2>
      <p>{profile.desc}</p>
    </div>
  );
};

export default Users;