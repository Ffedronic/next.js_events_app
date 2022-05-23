import Button from "../components/ui/button";
import classes from "./results-title.module.css";

/* A function that is returning a section with a title and a button. */
function ResultsTitle(props) {

  const { date } = props;

  /* Converting the date to a human readable format. */
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
