import Link from "next/link";

import classes from "./eventItem.module.css";

function EventItem(props) {
  const { id, title, date, image, location } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h3>{title}</h3>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore the event</Link>
      </div>
    </li>
  );
}

export default EventItem;
