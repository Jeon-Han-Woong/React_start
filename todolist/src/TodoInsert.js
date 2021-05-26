import React, { useState } from 'react';
import "./TodoInsert.css";
// https://react-icons.github.io/react-icons/
// 위 주소 접속 후 아이콘을 고를 수 있음.
// 단, 아이콘 기능을 사용하기 위해서는
// cmd창에서 먼저 
// npm install react-icons --save
// 를 입력해 설치해야함.
import {MdLibraryAdd} from 'react-icons/md';



const TodoInsert = ({onCreate}) => {

    const [task, setTask] = useState('')

    const onChange = (e) => {
        setTask(e.target.value)
    };
    
    const onSubmit = (e) => {
    
        onCreate(task);
        setTask('');
        
        e.preventDefault();
    }
    
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일 입력" onChange={onChange} name="task" value={task}/>
            <button type='submit'>
                <MdLibraryAdd />
            </button>
        </form>
    );
};

export default TodoInsert;