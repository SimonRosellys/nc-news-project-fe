import { useState } from "react";

const Votes = ({ votes, article_id }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);

  const incrementVotes = () => {
    setOptimisticVotes((currentVotes) => currentVotes + 1);
    fetch(
      `https://nc-news-project-sr.herokuapp.com/api/articles/${article_id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ inc_votes: 1 }),
        headers: { "Content-Type": "application/json" },
      }
    ).catch(() => {
      setOptimisticVotes((currentVotes) => currentVotes - 1);
    });
  };

  return (
    <div>
      <p>Votes: {votes + optimisticVotes}</p>
      <button onClick={incrementVotes} disabled={optimisticVotes > 0}>
        Add a Vote
      </button>
    </div>
  );
};
export default Votes;
