import React from 'react';
// styled 내부에서 동적 css 적용을 위해 css 기능 임포트
import styled, {css} from 'styled-components';

const countries = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'kr',
        text: '한국'
    },
    {
        name: 'us',
        text: '미국'
    },
    {
        name: 'jp',
        text: '일본'
    }
];

const CountriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Country = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    ${props => 
        props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}

    & + & {
        margin-left: 1rem;
    }
`;

const Countries = ({onChoice, country}) => {
    return (
        <CountriesBlock>
            {countries.map(c => (
                <Country key={c.name}
                    active={country===c.name}
                    onClick={() => onChoice(c.name)}
                >{c.text}</Country>
            ))}
        </CountriesBlock>
    )
}

export default Countries;