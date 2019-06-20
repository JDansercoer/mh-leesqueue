import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Global = () => {
  const [savedArticles, setSavedArticles] = useState([]);

  const addArticle = articleId => {
    setSavedArticles([...savedArticles, articleId]);
  };

  console.log(savedArticles);

  const articles = document.getElementsByTagName("article");

  Array.prototype.slice.call(articles).forEach(article => {
    article.style.position = "relative";
    const leesQueueButton = document.createElement("div"); // Create a <li> node
    leesQueueButton.classList.add("leesqueue-button");
    article.appendChild(leesQueueButton);
    ReactDOM.render(<App addArticle={addArticle} />, leesQueueButton);
  });

  return null;
};

export default Global;
