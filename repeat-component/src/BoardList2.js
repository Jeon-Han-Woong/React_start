import React from 'react';

// 하나의 파일 내에 컴포넌트를
// 두 개 이상 생성할 수 있음.

const Board = ({board}) => {
    return (
        <div>
            <b>{board.bno}</b><br/>
            <b>{board.bwriter}</b><br/>
            <b>{board.btitle}</b><br/>
        </div>
    );
}

const BoardList2 = () => {
    const Boards = [
        {
            bno: 1,
            btitle: "제목입니다.",
            bwriter: "글쓴이1",
            bcontent: "본문입니다."
        },
        {
            bno: 2,
            btitle: "제목입니다.",
            bwriter: "글쓴이2",
            bcontent: "본문입니다."
        },
        {
            bno: 3,
            btitle: "제목입니다.",
            bwriter: "글쓴이3",
            bcontent: "본문입니다."
        }
    ];

    return(
        <div>
            <Board board={Boards[0]}/>
            <Board board={Boards[1]}/>
            <Board board={Boards[2]}/>
        </div>  
    );
}

export default BoardList2;