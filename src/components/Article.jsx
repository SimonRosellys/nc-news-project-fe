import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Article = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  console.log(topic_slug);

  useEffect(() => {
    getArticles().then((allArticles) => {
      setArticles(allArticles);
    });
  }, []);

  return (
    <section className="topic-list">
      <nav>
        <p>Current topic selection: {topic_slug}</p>
        {articles.map((article) => {
          return (
            <div className="Article">
              <h1>{article.title}</h1>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
              <p>{article.body}</p>
              <p>Votes = {article.votes}</p>
              <p> Number of comments = {article.comment_count}</p>
            </div>
          );
        })}
      </nav>
    </section>
  );
};
export default Article;
