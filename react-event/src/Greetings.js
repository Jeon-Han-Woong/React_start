import React, {useState} from 'react';

const Greetings = () => {
    // const [hello, setHello] = useState('안녕');
    // const [color, setColor] = useState('black');

    const [inputs, setInputs] = useState({
        hello: '안녕',
        color: '',
    });

    const {hello, color} = inputs;

    const onClick = e => {
        const{className, value} = e.target;
        setInputs({
            ...inputs,
            [className] : value,
        })
    }

    const changeColor = e => {
        const {className} = e.target;
        setInputs({
            ...inputs,
            color: [className]
        })
    }

    const changeHello = (e) => {
        const {className} = e.target;
        if (className === 'hello'){
            setInputs({
                ...inputs,
                hello: '안녕하세요'
            });
        } else if (className === 'bye'){
            setInputs({
                ...inputs,
                hello: '안녕히가세요'
            });
        }
    }

    // const redButton = () => {
    //     setInputs({
    //         ...inputs,
    //         color: 'red'
    //     });
    // }

    // const greenButton = () => {
    //     setInputs({
    //         ...inputs,
    //         color: 'green'
    //     });
    // }

    // const blueButton = () => {
    //     setInputs({
    //         ...inputs,
    //         color: 'blue'
    //     });
    // }

    // const sayHello = () => {
    //     setInputs({
    //         ...inputs,
    //         hello: '안녕하세요'
    //     });
    // }

    // const sayBye = () => {
    //     setInputs({
    //         ...inputs,
    //         hello: '안녕히가세요'
    //     });
    // }
    return (
        <div>
            <h1 style={{color}}>{hello}</h1>

            <button onClick={changeHello} className='hello'>만나면</button>
            <button onClick={changeHello} className='bye'>헤어지면</button>
            <br/>
            <button style={{color:'red'}} 
                    onClick={changeColor} className='red'>
            빨간색</button>
            <button style={{color:'green'}} 
                    onClick={changeColor} className='green'>
            초록색</button>
            <button style={{color:'blue'}} 
                    onClick={changeColor} className='blue'>
            파란색</button>

            {/* <button onClick={sayHello}>만나면</button>
            <button onClick={sayBye}>헤어지면</button>
            <br/>
            <button style={{color:'red'}} onClick={redButton}>빨간색</button>
            <button style={{color:'green'}} onClick={greenButton}>초록색</button>
            <button style={{color:'blue'}} onClick={blueButton}>파랑색</button> */}
        </div>
    );
}

export default Greetings;