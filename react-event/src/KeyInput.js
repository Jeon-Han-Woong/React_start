import React, { useState } from 'react';

const KeyInput = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');

    // const onChangeUsername = (e) => {
    //     setUsername(e.target.value);
    // }

    // const onChangeMessage = e => {
    //     setMessage(e.target.value);
    // }

    // const onClick = () => {
    //     alert(username + ': ' + message);
    //     setUsername('');
    //     setMessage('');
    // }

    // const onKeyPress = e => {
    //     if(e.key === "Enter"){
    //         alert("엔터키 입력 감지");
    //         onClick();
    //     }
    // }

    const [inputs, setInputs] = useState({
        username: '',
        message: '',
    })

    const {username, message} = inputs;

    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    const onClick = () => {
        alert(username + ': ' + message);
        setInputs({
            username:'',
            message:'',
        });
    }

    const onKeyPress = e => {
        if(e.key === 8){
            alert("스페이스바 입력 감지");
            onClick();
        }
    }


    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text"
                    name = "username"   
                    placeholder="사용자명"
                    value={username}
                    onChange={onChange}></input>
            <input type="text"
                    name = "message"   
                    placeholder="메세지"
                    value={message}
                    onChange={onChange}
                    onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>확인</button>

            
            {/* <h1>이벤트 연습</h1>
            <input type="text"
                    name = "username"   
                    placeholder="사용자명"
                    value={username}
                    onChange={onChangeUsername}></input>
            <input type="text"
                    name = "message"   
                    placeholder="메세지"
                    value={message}
                    onChange={onChangeMessage}
                    onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>확인</button> */}

        </div>

        
    )
}

export default KeyInput;