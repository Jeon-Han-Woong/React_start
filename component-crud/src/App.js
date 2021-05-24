import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import { useRef, useState } from 'react';

function App() {
  // input이 두 개 추가되었기 때문에 input을 관리할
  // hooks를 새로 설정.
  const [inputs, setInputs] = useState({
    username: '',
    nickname: '',
  });

  const {username, nickname} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'asdf',
      nickname: 'nick1'
    },
    {
      id: 2,
      username: 'qwer',
      nickname: 'nick2'
    },
    {
      id: 3,
      username: 'zxcv',
      nickname: 'nick3'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 배열 추가시 사용할 함수
    const user = {
      id : nextId.current,
      username,
      nickname
    };

    setUsers([...users, user]);

    setInputs({
      username: '',
      nickname: '',
    });

    // 값 관리는 nextId.current로 한다.
    nextId.current += 1;
  }

  const onRemove = (id) => {
    // user.id가 일치하지 않는 요소들로만 재구성함.
    // 이를 위해 users.filter를 사용
    // users 내부 요소를 하나하나 user로 분해한 다음
    // user의 id 값이 삭제 버튼이 눌려진 요소의
    // id값과 일치하지 않는 경우만 리스트에 넘겨줌.
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div>
      <CreateUser username={username} nickname={nickname} onChange={onChange} onCreate={onCreate} ></CreateUser>
      <UserList users={users} onRemove={onRemove}></UserList>
    </div>
  );
}

export default App;
