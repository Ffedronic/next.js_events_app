import { useState, useContext } from "react";
import NotificationContext from "../../store/notification-context";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  const [comments, setComments] = useState([]);

  const [isFetchingComments, setIsFetchingComments] = useState(false);

  const notificationCtx = useContext(NotificationContext);

  function toggleCommentsHandler() {
    setIsFetchingComments(true);
    setShowComments((prevStatus) => !prevStatus);

    fetch("/api/comments/" + eventId)
      .then((response) => response.json())
      .then((data) => {
        setIsFetchingComments(false);
        setComments(data.comments);
      });
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Adding comment...",
      message: "Your comment is currently being saved in a database.",
      status: "pending",
    });

    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          notificationCtx.showNotification({
            title: "Error!",
            message: data.message || "something went wrong!",
            status: "error",
          });
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Comment saved...",
          message: data.message,
          status: "success",
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "something went wrong!",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
