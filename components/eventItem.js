import DateIcon from "./icons/date-icon";

import AddressIcon from "./icons/address-icon";

import Arrow from "./icons/arrow-right-icon";

import classes from "./eventItem.module.css";

import Button from "./ui/button";

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
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Explore event</span>
          <span className={classes.icon}>
            <Arrow />
          </span>
        </Button>
      </div>
    </li>
  );
}

export default EventItem;
