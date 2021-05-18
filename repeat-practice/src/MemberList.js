import React from 'react';
import './MemberStyle.css';

const Member = ({mem}) => {
    
    // const styleName = {
    //     color: 'red',
    //     backgroundColor: "aqua",
    //     textAlign : 'center'
    // };

    // const styleAge = {
    //     color: 'blue',
    //     backgroundColor: "yellow",
    //     textAlign : 'center'
    // };

    // const stylePhone = {
    //     color: 'green',
    //     backgroundColor: "black",
    //     textAlign : 'center'
    // };

    // const styleJob = {
    //     color: 'pink',
    //     backgroundColor: "#ff00ff",
    //     textAlign : 'center'
    // };

    return (
        <div>
            <hr/>
            <p className="styleName">이름 : {mem.name}</p>
            <p className="styleAge">나이 : {mem.age}</p>
            <p className="stylePhone">연락처 : {mem.phone}</p>
            <p className="styleJob">직업 : {mem.job}</p>
            
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
        },
        {
            name: "박춘배",
            age: 68,
            phone: "010-3132-5123",
            job: "방랑자"
        },
        {
            name: "김춘삼",
            age: 76,
            phone: "010-1532-9913",
            job: "웨폰마스터"
        },
        {
            name: "곽두팔",
            age: 56,
            phone: "010-4103-3405",
            job: "간호사"
        }
    ];

    
    return(
        
        <div>
            {memberinfo.map(temp => (
                <Member mem={temp} />
            ))}
        </div>
    );
}

export default MemberList;