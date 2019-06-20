import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Logo from './Logo';

const Button = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  font-size: 15px;
  background-color: white;
  display: none;
`;

const AddButton = ({ addArticle }) => {
  const addToQueue = event => {
    const articleNode = event.target.closest('article');
    const articleUrl = articleNode.dataset.vrContentboxUrl;
    const articleDmf = articleUrl.split('/')[articleUrl.split('/').length - 1];
    addArticle(articleDmf);
  };
  return (
    <Button className="lq-button" onClick={addToQueue}>
      <Logo width={30} height={24} />
    </Button>
  );
};

export default AddButton;
