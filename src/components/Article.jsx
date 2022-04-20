import { useParams } from "react-router-dom";
import { getArticles, getArticlesByTopic } from "../utils/api";
import { useEffect, useState } from "react";

const Article = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(topic_slug);
    getArticlesByTopic(topic_slug).then((allArticles) => {
      setArticles(allArticles);
    });
  }, [topic_slug]);
  return (
    <section className="Article">
      <nav>
        <p>Current topic selection: {topic_slug}</p>
        {articles.map((article) => {
          return (
            <div className="Article" key={article.article_id}>
              <h1>{article.title}</h1>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
              <p>{article.body}</p>
              <p>Votes = {article.votes}</p>
              <p> Number of comments = {article.comment_count}</p>
            </div>
          );
          // }
        })}
      </nav>
    </section>
  );
};
export default Article;
