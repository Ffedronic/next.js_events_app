import { Fragment } from "react";
import classes from "./comment-list.module.css";

/**
 * It takes a prop called items, which is an array of objects, and returns a list of list items, each
 * of which contains a paragraph and a div.
 * @param props - {
 * @returns A React component.
 */
function CommentList(props) {
  const {items} = props;
  return (
    <ul className={classes.comments}>
      {items.map((item) =>
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      )}
    </ul>
  );
}

export default CommentList;
