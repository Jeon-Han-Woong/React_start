import React, { useState } from 'react';

const FetchTest = () => {

    const [data, setData] = useState(null);

    const onClick = () => {
        fetch("http://localhost:8181/replies/131082/1").then(response => {
            return response.json();
        }).then((json) => {
            console.log(json);
            setData(json);
        });

        
    }

    return (
        <div>
            <div>
            <button onClick={onClick}>불러오기</button>
            </div>
            {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
        </div>
    );
}

export default FetchTest;