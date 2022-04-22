import { getComments } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const params = useParams();
  const id = params.article_id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then((allComments) => {
      setComments(allComments);
    });
  }, [id]);

  return (
    <section className="Article">
      <h1>Comments:</h1>
      {comments.map((comment) => {
        return (
          <div className="Comment" key={comment.comment_id}>
            <p>Comment: {comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Date: {comment.created_at}</p>
            <p>Number of Votes: {comment.votes}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
