import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";

const FullArticle = () => {
  const params = useParams();
  const id = params.article_id;
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(id).then((singleArticle) => {
      setArticle(singleArticle);
    });
  });

  return (
    <>
      <h1>This is a FullArticle of {id}</h1>
      <p>Title: {article.title}</p>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Description: {article.body}</p>
      <p>Date: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Number of Comments: {article.comment_count}</p>
    </>
  );
};

export default FullArticle;
