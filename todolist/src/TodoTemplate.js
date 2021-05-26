import React from 'react';
import './TodoTemplate.css';

// 아래의 children은 app.js에서 
// TodoTemplate 태그 사이의 요소를 의미합니다.
const TodoTemplate = ({children}) => {
    return(
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;