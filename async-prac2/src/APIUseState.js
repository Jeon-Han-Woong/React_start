import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Print = ({temp}) => {
    return(
        <div>
            <p>종류 : {temp.areaSe}</p>
        
        </div>
    );
}

const APIUseState = () => {
    const [data, setData] = useState(null);

    const onClick = () => {

        fetch('/openapi/tourInfo/food.do' ,
        {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
            .then(response => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                setData(json);
            })

        
        // axios.get("/openapi/tourInfo/food.do")
        //     .then(response => {
        //         setData(response.data);
        //     });
    };

    // useEffect(() => {
    //     onToggle
    // })

    return(
        <div>
            <button onClick={onClick}>axios로 보기</button>
            {data && data.result.map(temp => (
                <Print temp={temp}></Print>
            ))}
        </div>

    );
}

export default APIUseState;