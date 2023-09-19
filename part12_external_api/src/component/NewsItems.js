// 뉴스 뷰어 UI 생성하기

import React from 'react';
import styled from 'styled-components';

const NewsItemblock = styled.div`
  display: flex;
  .thumbnail {
      margin-right: 1rem;
      img {
          display: block;
          width: 160px;
          height: 100px;
          object-fit: cover;
      }
  }
  .contents {
    h2 {
        margin: 0;
        a {
            color: black;
        }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
  margin-top: 3rem;
  } 
`;

const NewsItems = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemblock>
      {urlToImage && (
        <div className='thumbnail'>
          <a href={url} target='_blank' rel='noopener norefarrer'>
            <img src={urlToImage} alt='thumbnail' />
          </a>
        </div>)}
      <div className='contents'>
        <h2>
          <a href={url} target='_blank' rel='noopener norefarrer'>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemblock>
  );
};

export default NewsItems;