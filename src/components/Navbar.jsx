import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";

const Navbar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((allTopics) => {
      setTopics(allTopics);
    });
  }, []);

  return (
    <section className="topic-list">
      <h1>Topics</h1>
      <nav>
        {topics.map(({ slug }) => {
          return (
            <div key={slug}>
              <Link to={`/topics/${slug}`}>
                <h2>{slug}</h2>
              </Link>
            </div>
          );
        })}
      </nav>
    </section>
  );
};
export default Navbar;
