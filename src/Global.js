import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Global = () => {
  const articles = document.getElementsByTagName("article");
  console.log(articles);

  Array.prototype.slice.call(articles).forEach(article => {
    article.style.position = "relative";
    const leesQueueButton = document.createElement("div"); // Create a <li> node
    leesQueueButton.classList.add("leesqueue-button");
    article.appendChild(leesQueueButton);
    ReactDOM.render(<App />, leesQueueButton);
  });

  return null;
};

export default Global;
