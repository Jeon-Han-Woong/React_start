import React, {useState} from 'react';

const InputState = () => {
    const [text, setText] = useState('');

    // 이벤트를 지정할 함수를 저장할 변수의 이름은
    // 일반적으로 on + 이벤트명으록 작명.
    const onChange = e => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b> 값 : {text} </b>
            </div>
        </div>
    )
}

export default InputState;