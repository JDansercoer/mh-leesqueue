import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import Queue from './Queue';

const Global = () => {
  const [savedArticles, setSavedArticles] = useState(
    JSON.parse(localStorage.getItem('leesQueue')),
  );
  const [articleDatas, setArticleDatas] = useState([]);

  const addArticle = articleId => {
    const newArticles = savedArticles
      ? [...savedArticles, articleId]
      : [articleId];
    axios({
      method: 'POST',
      url: 'http://localhost:3000/https://0241ee82.ngrok.io/api/teaser/4',
      data: newArticles,
    }).then(res => setArticleDatas(res.data));
    setSavedArticles(newArticles);
    localStorage.setItem('leesQueue', JSON.stringify(newArticles));
  };

  const next = () => {
    const [nextArticle, ...otherArticles] = savedArticles;
    console.log(otherArticles);

    setSavedArticles(otherArticles);
    localStorage.setItem('leesQueue', JSON.stringify(otherArticles));

    window.location = `https://test.nieuwsblad.be/cnt/${nextArticle}`;
  };

  const clear = () => {
    setArticleDatas([]);
    setSavedArticles([]);
    localStorage.removeItem('leesQueue');
  };

  useEffect(() => {
    if (savedArticles) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/https://0241ee82.ngrok.io/api/teaser/4',
        data: savedArticles,
      }).then(res => setArticleDatas(res.data));
    }
  }, []);

  const articles = document.getElementsByTagName('article');

  Array.prototype.slice.call(articles).forEach(article => {
    article.style.position = 'relative';
    const leesQueueButton = document.createElement('div'); // Create a <li> node
    leesQueueButton.classList.add('leesqueue-button');
    article.appendChild(leesQueueButton);
    ReactDOM.render(<App addArticle={addArticle} />, leesQueueButton);
  });

  return <Queue articles={articleDatas} next={next} clear={clear} />;
};

export default Global;
