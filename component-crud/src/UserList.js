import React from 'react';
import './MyStyle.css';

const User = ({user, onRemove, onToggle}) => {
    return(
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.clicked ? 'blue' : 'black'
            }} onClick={() => onToggle(user.id)}>{user.username}</b>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.nickname}</p>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <hr/>
        </div>
    );
}


const UserList = ({users, onRemove, onToggle}) => {
    return (
        <div>
            {users.map(temp => (
                <User user={temp} key={temp.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}

export default React.memo(UserList);