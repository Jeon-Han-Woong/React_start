// useState가 함수형 컴포넌트에서 상태관시키는 함수
import React, {useState} from 'react';

const Counter = () => {
    // number 상태를 관리할 수 있도록 처리
    // 왼쪽 number가 실질적으로 사용할 값
    // 오른쪽 setNumber는 number값을 변경할 때 사용함.
    // useState(0) 을 넣어서 0을 초기값으로 설정함.
    // [변수명, set변수명] 을 비구조화 할당으로 처리함.
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    return (
        <div>
            <h1>{number}</h1>
            <button onClick = {() => {
                setNumber(number + 1);
            }}>+1</button>

            <h1>{number2}</h1>
            <button onClick = {() => {
                setNumber(number2 + 2);
            }}>+2</button>  
        </div>
    );
}

export default Counter;