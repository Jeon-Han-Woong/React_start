import React, {useState} from 'react';

const Hello = () => {
    const [hi, setHi] = useState("");
    const [color, setColor] = useState("black");
    const [backgroundColor, setBackgroundColor] = useState("white");
    // const [changeColor, setChangeColor] = useState("color: 'black';");
    return(
        <div>
            <h1 style={{color, backgroundColor}}>안녕{hi}</h1>
            <button onClick={ () => {
                setHi("하세요");
            }}>
            만나면
            </button>
            <button onClick={ () => {
                setHi("히가세요");
            }}>
            헤어지면
            </button>
            <br></br>
            <button style={{color: 'red'}} onClick={ () => {
                setColor("red");
            }}>빨강</button>
            <button style={{color: 'green'}} onClick={ () => {
                setColor("green");
            }}>초록</button>
            <button style={{color: 'blue'}} onClick={ () => {
                setColor("blue");
            }}>파랑</button>
            <br></br>
            <button onClick={ () => {
                setBackgroundColor("black");
            }}>배경 검정색</button>
            <button onClick={ () => {
                setBackgroundColor("aqua");
            }}>배경 아쿠아색</button>
            <button onClick={ () => {
                setBackgroundColor("white");
            }}>배경 초기화</button>
            <hr></hr>
            {/* <h1 style={{changeColor}}>안녕</h1>
            <button onClick={ () => {
                setChangeColor("color: 'red';")
            }}>버튼</button> */}
        </div>

    );
}

export default Hello;