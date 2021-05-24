import React from 'react';
import './MyStyle.css';

const User = ({user, onRemove}) => {
    return(
        <div className="mine">
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.nickname}</p>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <hr/>
        </div>
    );
}


const UserList = ({users, onRemove}) => {
    return (
        <div>
            {users.map(temp => (
                <User user={temp} key={temp.id} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default UserList;