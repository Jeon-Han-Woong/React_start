import React from 'react';
import {
    MdRemoveCircleOutline,
    MdCheckBox,
    MdCheckBoxOutlineBlank
} from 'react-icons/md';
import './TodoListItem.css';

const TodoListItem = ({todo, onToggle, onRemove}) => {
    return (
        <div className="TodoListItem">
            <div className="checkbox" onClick={() => onToggle(todo.id)}>
                {todo.active ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="text">{todo.task}</div>
            </div>
            <div className="remove" onClick={() => onRemove(todo.id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

// React.memo로 감싸서 export를 하면
// 모든 컴포넌트가 다시 다 그려지지 않고,
// todo, onRemove, onToggle의 변동이 생긴 경우만
// 다시 그려줌
export default React.memo(TodoListItem);