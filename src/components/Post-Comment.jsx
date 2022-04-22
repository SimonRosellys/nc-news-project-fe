import { useState } from "react";
import { useParams } from "react-router-dom";

const AddComent = ({ setComments, username }) => {
  const [enteredText, setEnteredText] = useState("");
  const [newComment, setNewComment] = useState("");
  const params = useParams();
  const id = params.article_id;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://nc-news-project-sr.herokuapp.com/api/articles/${id}/comments`,

      {
        method: "POST",
        body: JSON.stringify({
          body: newComment,
          username: username,
        }),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments((currComments) => {
          const newComments = [data.comment, ...currComments];
          return newComments;
        });
      });
    setNewComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="comment-input"
        required
        placeholder="Add your comment here"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      ></textarea>
      <br></br>
      <button>Post your comment</button>
    </form>
  );
};
export default AddComent;
