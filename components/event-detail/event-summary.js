import classes from './event-summary.module.css';

/**
 * It returns a section element with a title
 * @param props - This is the object that contains all the props that were passed to the component.
 * @returns A React component
 */
function EventSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;