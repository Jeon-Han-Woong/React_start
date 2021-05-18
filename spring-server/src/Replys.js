import React from 'react';

const Replys = () => {

    // fetch ~ then을 이용해서 댓글 목록을
    // 리액트 내부로 가져옴.

    // fetch(주소).then(응답객체 => 응답객체.json())
    // .catch(에러사항 => 에러사항처리);

    // 옵션은 입력 안 할 경우 GET 방식으로 통일됩니다.
    const data = fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log('Fetch Error', err);
        });
    
    // .then(res => res.json())
        // .then(res => console.log(JSON.stringify(res)))
        // .catch(err => console.error("Error : ", err));


    return (
        <div>
            {data}
        </div>
    );
}

export default Replys;