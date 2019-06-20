import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const body = document.getElementsByClassName("body-wrapper");
const articles = document.getElementsByTagName("article");
console.log(articles);

Array.prototype.slice.call(articles).forEach(article => {
  ReactDOM.render(<App />, article);
});
