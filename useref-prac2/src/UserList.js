import React from 'react';
import App from './App.js';
import './YourStyle.css'

const Print = ({user}) => {
    return (
        <div className='myStyle'>
            
            <p>아이디 : {user.id}</p>
            <p>이름 : {user.username}</p>
            <p>번호 : {user.phonenum}</p>
            
        </div>
    );
}

const UserList = ({users}) => {

    return (
        <div>
            {users.map(temp => (
                <Print user={temp} key={temp.id}/>
            ))}
            {/* <b>{users[0].username}</b> */}
        </div>
    );

}

export default UserList;