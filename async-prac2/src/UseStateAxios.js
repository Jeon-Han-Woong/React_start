import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsetStateAxios = () => {
    const [data, setData] = useState(null);

    const onClick = () => {
        axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e36148b514cf744e93b94f9993d3df33&targetDt=20210506")
            .then(response => {
                setData(response.data);
            });
    };

    useEffect(() => {
        onClick();
    })

    return(
        <div>
            <button onClick={onClick}>axios로 순위 보기</button>
            {data && data.boxOfficeResult.dailyBoxOfficeList.map(temp => (
                <Print temp={temp}></Print>
            ))}
        </div>
    );

    

}

const Print = ({temp}) => {
    return(
        <div>
            <p>순위 : {temp.rank}</p>
            <p>제목 : {temp.movieNm}</p>
            <p>개봉일 : {temp.openDt}</p>
        </div>
    );
}

export default UsetStateAxios;