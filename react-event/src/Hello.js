import React, {useState} from 'react';

const Hello = () => {
    const [hi, setHi] = useState('');

    const myHi = () => {
        setHi("안녕하세요");
        alert(hi);
    }

    const myBye = () => {
        setHi("안녕히가세여");
        alert(hi);
    }
    
    return(
        <div>
            {/* <h1>{hi}</h1> */}
            <button onClick={myHi}>왔습니다</button>
            <button onClick={myBye}>갔습니다</button>
        </div>
    );
}

export default Hello;