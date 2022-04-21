import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-project-sr.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticlesByTopic = (topic) => {
  if (topic) {
    return newsApi.get(`/articles?topic=${topic}`).then(({ data }) => {
      return data.articles;
    });
  } else {
    return newsApi.get(`/articles`).then(({ data }) => {
      return data.articles;
    });
  }
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
