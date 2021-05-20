import React, { useState } from 'react';

const Print = ({exe}) => {
    return (
        <div className='reply'>
            <p>댓글 번호 : {exe.rno}</p>
            <p>글 번호 : {exe.bno}</p>
            <p>댓글 내용 : {exe.replytext}</p>
            <p>작성자 : {exe.replyer}</p>
            <p>등록일 : {exe.regdate}</p>
            <p>수정일 : {exe.updatedate}</p>
        </div>
    );
}

const FetchTest2 = () => {

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
            {/* {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
             */}
            {data && data.list.map(temp => (
                <Print exe={temp}/>
            ))}
            
        </div>
    );
}

export default FetchTest2;