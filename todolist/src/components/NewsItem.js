import React from 'react';
import styled from 'styled-components';

// styled를 활용하면 변수 내부에 css를 저장해놓고
// 그 변수를 컴포넌트처럼 활용할 수 있음.
// styled.div로 시작하는 이 요소는
// 최상단 div태그를 대체함
const NewsItemBlock = styled.div`
    display:flex;
`;

const NewsItem = ({article}) => {
    const { title, description, url, urlToImage} = article;

    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className="thumbnail">
                    <a href={url} target="_blank"
                        rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target="_blank"
                        rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
}

export default NewsItem;