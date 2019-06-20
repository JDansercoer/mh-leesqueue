import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10px;
  z-index: 9001;
  font-family: Helvetica Neue LT, Arial, Helvetica, sans-serif;
  background-color: white;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
`;

const QueueWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const SingleArticle = styled.a`
  display: flex;
  align-items: center;
`;

const ArticleImage = styled.img`
  height: 80px;
`;

const ArticleTitle = styled.div`
  font-size: 10px;
  width: 150px;
  margin: 0 10px;
  color: black;
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
`;

const QueueLogo = styled(Logo)`
  margin-right: 10px;
`;

const Queue = ({ articles }) => {
  if (articles.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      <QueueWrapper>
        <QueueLogo height={40} widht={32} />
        {articles.map(article => {
          return (
            <SingleArticle
              href={`https://test.nieuwsblad.be/cnt/${article.articleId}`}
            >
              <ArticleImage
                src={`https://nbocdn.akamaized.net/Assets/Images_Upload/${
                  article.imageSrc
                }`}
              />
              <ArticleTitle>{article.title}</ArticleTitle>
            </SingleArticle>
          );
        })}
      </QueueWrapper>
    </Wrapper>
  );
};

export default Queue;
