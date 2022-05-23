import DateIcon from "../icons/date-icon";

import AddressIcon from "../icons/address-icon";

import Arrow from "../icons/arrow-right-icon";

import classes from "./eventItem.module.css";

import Button from "../ui/button";

/**
 * It takes in an object with a bunch of properties, and returns a list item with a bunch of HTML
 * elements inside of it
 * @param props - {
 * @returns A list item with a button.
 */
function EventItem(props) {

  const { id, title, date, image, location } = props;
  
  /* Converting the date to a human readable format. */
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  const exploreLink = `/events/${id}`;

  const addressText = location.replace(', ', '\n');

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
            <address>{addressText}</address>
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
