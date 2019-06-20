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

const AddButton = () => {
  const addToQueue = () => alert("added");
  return (
    <Button className="lq-button" onClick={addToQueue}>
      Add
    </Button>
  );
};

export default AddButton;
