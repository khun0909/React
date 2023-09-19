// 객체에 미리 예시 데이터

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItems';
import axios from 'axios';

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
  };
`;

const NewsList = (category) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("category", category.category);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log('query')
        const query = category.category === 'all' ? '' : `&category=${category.category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=589c726f2c134ed5b67e6e5f9a706684`
        );
        console.log(query);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category.category]);

  // articles에 값이 설정되지 않았을때(값이 없다.)
  if (!articles) {
    return null;
  }

  return (
    <NewsListBlock>
      {articles.map((article) => (<NewsItem key={article.url} article={article}></NewsItem>))}
    </NewsListBlock>

  );
}

export default NewsList;