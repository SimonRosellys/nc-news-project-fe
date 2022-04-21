import { useState } from "react";

const Votes = ({ votes, article_id }) => {
  const [optimisticVotes, setOptimisticVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  const amendVotes = (num) => {
    setOptimisticVotes((currentVotes) => currentVotes + num);
    fetch(
      `https://nc-news-project-sr.herokuapp.com/api/articles/${article_id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ inc_votes: num }),
        headers: { "Content-Type": "application/json" },
      }
    ).catch(() => {
      setOptimisticVotes((currentVotes) => currentVotes + num);
      return <p>Vote not counted, please try later</p>;
    });
  };

  //

  return (
    <div>
      <p>Votes: {votes + optimisticVotes}</p>
      <button
        disabled={voted}
        onClick={() => {
          amendVotes(1);
          setVoted(true);
        }}
      >
        Add a Vote
      </button>
      <button
        disabled={!voted}
        onClick={() => {
          amendVotes(-1);
          setVoted(false);
        }}
      >
        Remove your Vote
      </button>
    </div>
  );
};
export default Votes;
