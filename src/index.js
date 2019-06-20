import React from "react";
import ReactDOM from "react-dom";

import Global from "./Global";

const articles = document.getElementsByTagName("article");
console.log(articles);

const leesQueueRoot = document.createElement("div"); // Create a <li> node
leesQueueRoot.id = "lq-root";
document.body.appendChild(leesQueueRoot);

ReactDOM.render(<Global />, leesQueueRoot);
