// 카테고리 기능 구현
// business(비즈니스)/entertainment(연예)/health(건강)/science(과학)/sports(스포츠)/technology(기술)

import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  },
]

// 전체 메뉴 설정
const CategoriesBlock = styled.div`
  display: flex;
  padding: 16px;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px){
      width: 100%;
      overflow-x: auto;
  };
`
// 각 텍스트별 설정
const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
      color: #495057;
  };

  ${props =>
    props.active && css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
          color: #3bc9db;
      }
    `

  }

  & + & {
      margin-left: 1rem;
};
`

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;