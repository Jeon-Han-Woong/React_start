import React, { useCallback, useRef, useState } from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      task: `할 일 ${i}`,
      active: false
    });
  }
  return array;
}

function App() {
  // useState내부에 함수 호출시 ()를 빼고 함수명만 넣는다.
  // 안 그러면 초당 한 번 씩 함수를 계속 불러옴.
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  // const [todos, setTodos] = useState(
  //   [
  //     {
  //      id :1,
  //      task : '재재시험 문제내기',
  //      active : true
  //     },
  //     {
  //     id :2,
  //     task : '파이널 프로젝트 발표 준비하기',
  //     active : true
  //     },
  //     {
  //     id :3,
  //     task : '스프링부트, JPA공부하기',
  //     active : false
  //     }
  //   ]
  // )

  // const nextId = useRef(4);

  const onCreate = useCallback(task => {
    const newtodo = {
    id : nextId.current,
    task,
    clicked: false
    };

    //setTodos([...todos, newtodo]);
    setTodos(todos => todos.concat(newtodo))
    nextId.current += 1;

  }, []);

  const onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, active: !todo.active} : todo))

  }, []);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  return ( 
    <div>
      <TodoTemplate>
        <TodoInsert onCreate={onCreate}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
