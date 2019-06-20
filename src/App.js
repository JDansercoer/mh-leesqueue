import React from "react";
import { hot } from "react-hot-loader";
import { createGlobalStyle } from "styled-components";
import AddButton from "./AddButton";

const GlobalStyle = createGlobalStyle`
  article {
      &:hover {
          .lq-button {
              display: block
          }
      }
  }
`;

const App = ({ onAdd }) => (
  <>
    <GlobalStyle />
    <AddButton onAdd={onAdd} />
  </>
);

export default hot(module)(App);
