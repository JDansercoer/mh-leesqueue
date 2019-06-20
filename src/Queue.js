import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  background-color: #0075be;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px 100px;
  z-index: 9001;
  font-family: Helvetica Neue LT, Arial, Helvetica, sans-serif;
`;

const Title = styled.div`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
`;

const QueueWrapper = styled.div`
  display: flex;
`;

const SingleArticle = styled.div`
  margin-right: 10px;
`;

const Queue = ({ savedArticles }) => {
  return (
    <Wrapper>
      <Title>Leesqueue</Title>
      <QueueWrapper>
        {savedArticles.map(article => {
          return <SingleArticle>{article}</SingleArticle>;
        })}
      </QueueWrapper>
    </Wrapper>
  );
};

export default Queue;
