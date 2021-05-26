import logo from './logo.svg';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import { useCallback, useRef, useState } from 'react';

function createBulkUsers() {
  const array = [];
  for (let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      username: `이름 ${i}`,
      nickname: `별명 ${i}`,
      clicked: false
    })
  }
  return array
}

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

  const [users, setUsers] = useState(createBulkUsers);

  const nextId = useRef(2501);

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: 'asdf',
  //     nickname: 'nick1',
  //     clicked: false
  //   },
  //   {
  //     id: 2,
  //     username: 'qwer',
  //     nickname: 'nick2',
  //     clicked: true
  //   },
  //   {
  //     id: 3,
  //     username: 'zxcv',
  //     nickname: 'nick3',
  //     clicked: false
  //   }
  // ]);

  // const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 배열 추가시 사용할 함수
    const user = {
      id : nextId.current,
      username,
      nickname,
      clicked: false
    };

    setUsers([...users, user]);

    setInputs({
      username: '',
      nickname: '',
    });

    // 값 관리는 nextId.current로 한다.
    nextId.current += 1;
  };

  const onRemove = useCallback(id => {
    // user.id가 일치하지 않는 요소들로만 재구성함.
    // 이를 위해 users.filter를 사용
    // users 내부 요소를 하나하나 user로 분해한 다음
    // user의 id 값이 삭제 버튼이 눌려진 요소의
    // id값과 일치하지 않는 경우만 리스트에 넘겨줌.
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    // 클릭시 clicked 의 값을 반대로 바꿔줌
    setUsers(users => users.map(user => user.id === id ? {...user, clicked: !user.clicked} : user)
    );
  
  }, []);

  return (
    <div>
      <CreateUser username={username} nickname={nickname} onChange={onChange} onCreate={onCreate} ></CreateUser>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
    </div>
  );
}

export default App;
