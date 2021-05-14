import React, {useState} from 'react';

const InputState2 = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    // 하나의 useState에 두 개 이상의 상대 변수를 관리하는 것도 가능
    const {name, nickname} = inputs;

    const onChange = e => {
        // 인풋 두 개에서 값을 하나 하나 분리해서 저장
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onRest = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    return (
        <div>
            <input name="name" placeholder="이름"
                onChange={onChange} value={name} />
            <input name="nickname" placeholder="닉네임"
                onChange={onChange} value={nickname} />
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputState2;