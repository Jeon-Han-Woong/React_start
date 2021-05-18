import React, { useState } from 'react';
import axios from 'axios';

const Print = ({exe}) => {
    return (
        <div>
            <p>댓글 번호 : {exe.rno}</p>
            <p>글 번호 : {exe.bno}</p>
            <p>댓글 내용 : {exe.replytext}</p>
            <p>작성자 : {exe.replyer}</p>
            <p>등록일 : {exe.regdate}</p>
            <p>수정일 : {exe.updatedate}</p>
        </div>
    );
}

const AxiosTest2 = () => {
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
            {/* {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>} */}
            {data && data.list.map(temp => (
                <Print exe={temp}/>
            ))}
        
        </div>
    )
}

export default AxiosTest2;