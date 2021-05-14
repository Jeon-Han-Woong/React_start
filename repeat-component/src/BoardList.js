import React from 'react';

const BoardList = () => {
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

    return (
        <div>
            <div>
                <b>{Boards[0].bno}</b><br/>
                <b>{Boards[0].btitle}</b><br/>
                <b>{Boards[0].bwriter}</b><br/>
                <b>{Boards[0].bcontent}</b><br/>
                <b>{Boards[1].bno}</b><br/>
                <b>{Boards[1].btitle}</b><br/>
                <b>{Boards[1].bwriter}</b><br/>
                <b>{Boards[1].bcontent}</b><br/>
                <b>{Boards[2].bno}</b><br/>
                <b>{Boards[2].btitle}</b><br/>
                <b>{Boards[2].bwriter}</b><br/>
                <b>{Boards[2].bcontent}</b><br/>
            </div>
        </div>
    )
}

export default BoardList;