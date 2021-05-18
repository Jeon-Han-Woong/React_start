// useRef도 hooks로 분류되는 기능.
import React, {useState, useRef} from 'react';

const InputFocus = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    // 특정 DOM 요소를 선택할 수 있는 변수 선언
    const nameInput = useRef();
    const nicknameInput = useRef();

    // 인풋 태그 2개를 다시 쪼개기
    const {name, nickname} = inputs;

    // 변동사항 감지시, 불변성을 지키면서 값 변영
    const onChange = e => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    // 초기화시 nameInput이 포커싱 되도록 처리
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    const callBtn = () => {
        alert(name + " : " + nickname);
        setInputs({
            name: '',
            nickname: ''
        });
        nicknameInput.current.focus();
    }

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}/> 
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
                ref={nicknameInput}
                />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({nickname})
            </div>
            <button onClick={callBtn}>나는 버튼</button>
        </div>
    )
}

export default InputFocus;