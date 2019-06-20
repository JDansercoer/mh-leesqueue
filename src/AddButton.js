import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Button = styled.div`
  position: absolute;
  cursor: pointer;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 15px;
  background-color: white;
  display: none;
`;

const AddButton = ({ addArticle }) => {
  const addToQueue = event => {
    const articleNode = event.target.parentNode.parentNode;
    const articleUrl = articleNode.dataset.vrContentboxUrl;
    const articleDmf = articleUrl.split("/")[articleUrl.split("/").length - 1];
    addArticle(articleDmf);
  };
  return (
    <Button className="lq-button" onClick={addToQueue}>
      Add
    </Button>
  );
};

export default AddButton;
