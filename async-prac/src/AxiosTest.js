import React, { useState } from 'react';
import axios from 'axios';

const AxiosTest = () => {
    const [data, setData] = useState(null);

    // 클릭시 ajax 요청을 하도록 처리
    const onClick = () => {
        axios.get("http://localhost:8181/replies/131082/1")
        .then(response => {
            setData(response.data);
        });
    }

    return (
        <div>
            <div>
            <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        
        </div>
    )
}

export default AxiosTest;