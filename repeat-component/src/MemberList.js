import React from 'react';

const Member = (member) => {
    return(
        <div>
            <b>{member.name}</b>
            <b>{member.age}</b>
            <b>{member.phone}</b>
            <b>{member.job}</b>
        </div>
    );
}

const MemberList = () => {
    const memberinfo = [
        {
            name: "홍길동",
            age: 15,
            phone: "010-1111-3333",
            job: "마법사"
        },
        {
            name: "김철수",
            age: 8,
            phone: "010-2222-4444",
            job: "전사"
        },
        {
            name: "정성껏",
            age: 25,
            phone: "010-5555-7777",
            job: "사회복지사"
        }
    ];

    return(
        <div>
            <Member member={memberinfo[0]}></Member>
            <Member member={memberinfo[1]}></Member>
            <Member member={memberinfo[2]}></Member>
        </div>
    );
}

export default MemberList;