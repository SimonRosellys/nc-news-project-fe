import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import { useEffect, useState } from "react";

const Article = () => {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesByTopic(topic_slug).then((allArticles) => {
      setArticles(allArticles);
      setIsLoading(false);
    });
  }, [topic_slug]);

  if (isLoading) return <p>Don't have a cow man, your news is on it's way</p>;

  return (
    <section className="Article">
      <nav>
        <p>Current topic selection: {topic_slug}</p>
        {articles.map((article) => {
          return (
            <div className="Article" key={article.article_id}>
              <Link to={`/article/${article.article_id}`}>
                <p>Click for more...</p>
              </Link>
              <h1>{article.title}</h1>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
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
