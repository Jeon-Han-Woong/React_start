import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';


const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title:'제목',
    description: '내용',
    url : 'https://google.com',
    urlToImage : 'https://via.placeholder.com/160'
};

const NewsList = ({category, country}) => {
    const [articles, setArticles] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                // 바로 넘어가지 않고
                // 결과물이 리턴되어야 다음 요소가
                // 실행되게 만들때 await 사용

                // 전달받은 category Props의 내용에 따라
                // axios로 요청하는 주소에 대해서
                // 가변적 주소적용이 되도록
                // 로직을 고치기/
                const query1 = category === 'all' ? '' : category;

                const query2 = country === 'all' ? '' : country;

                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${query2}&category=${query1}&apikey=3187e3b8261c43a5823d599d1f9c834b`);
                setArticles(response.data.articles);
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData(); 
    }, [category, country]);

    if(loading) {
        return (
            <NewsListBlock>로딩중입니다...</NewsListBlock>
        );
    }

    if(!articles) {
        return null;
    }

    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem article={article} key={article.url}></NewsItem>
            ))}
        </NewsListBlock>
    );
}

export default NewsList;