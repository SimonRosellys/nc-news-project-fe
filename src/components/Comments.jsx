import { getComments } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComent from "./Post-Comment";

const Comments = (props) => {
  const { username } = props;
  const params = useParams();
  const id = params.article_id;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then((allComments) => {
      setComments(allComments);
    });
  }, [id]);

  const deleteComment = (comment_id) => {
    setComments((currComments) => {
      return currComments.filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
    fetch(
      `https://nc-news-project-sr.herokuapp.com/api/comments/${comment_id}`,
      {
        method: "DELETE",
      }
    ).then(() => {});
  };

  if (comments === [undefined]) {
    return <h1>There are no comments on this article:</h1>;
  }
  return (
    <section className="Article">
      <h1>Add a comment:</h1>
      <AddComent setComments={setComments} username={username} />
      <h1>Comments:</h1>
      {comments.map((comment) => {
        return (
          <div className="Comment" key={comment.comment_id}>
            <p>Comment: {comment.body}</p>
            <p>Author: {comment.author}</p>
            <p>Date: {comment.created_at}</p>
            <p>Number of Votes: {comment.votes}</p>
            <button
              onClick={() => {
                if (comment.author === username) {
                  deleteComment(comment.comment_id);
                }
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
