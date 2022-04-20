import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-project-sr.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return newsApi.get(`/articles`).then(({ data }) => {
    return data.articles;
  });
};

//option 2!! tried and failed with option 1

export const getArticlesByTopic = (topic) => {
  if (topic) {
    return newsApi.get(`/articles?topic=${topic}`).then(({ data }) => {
      return data.articles;
    });
  }
};

// two options
//1 create getArticlesByTopic and use in article.js
//2 use axios' way of passing a query

//https://nc-news-project-sr.herokuapp.com/api/articles?topic=football
