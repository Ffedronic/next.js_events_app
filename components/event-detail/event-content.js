import classes from './event-content.module.css';

/**
 * It's a function that returns a section element with the className of content and the children of the
 * props object
 * @param props - This is the object that contains all the properties that were passed to the
 * component.
 * @returns A section element with the className of content and the children of the component.
 */
function EventContent(props) {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
