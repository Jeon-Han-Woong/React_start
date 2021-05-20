import axios from 'axios';
import React, { useState } from 'react';

const NotUsetState = () => {
    const [data, setData] = useState(null);

    const onClick = () => {
        fetch("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=03b7edecc5fd6d07ade5381f065d08be&targetDt=20210506")
            .then(response => {
                return response.json;
            })
            .then((json) => {
                console.log(json);
                setData(json);
            })
    };

    return(
        <div>
            <button onClick={onClick}>순위 보기</button>
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