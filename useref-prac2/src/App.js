import logo from './logo.svg';
import './App.css';
import UserList from './UserList';


function App() {

  const Users = [
    {
      id: 1,
      username : "한웅전",
      phonenum : '01011112222'
    },
    {
      id: 2,
      username : "김춘삼",
      phonenum : '01032323444'
    },
    {
      id: 3,
      username : "박춘배",
      phonenum : '010111235232'
    },
    {
      id: 4,
      username : "곽두팔",
      phonenum : '01044012932'
    }
  ];

  const nextId = useRef(5);

  const onCreate = () => {
    // 새로운 요소가 생성되었을 때
    // nextId값을 1 증가
    nextId.current += 1;
  }

  return (
    <div>
      <UserList users={Users} />
    </div>
  );
}

export default App;
