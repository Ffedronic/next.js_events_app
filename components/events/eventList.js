import EventItem from "./eventItem";

import classes from "./evenList.module.css"

/**
 * The eventList function takes in a prop called items, which is an array of objects, and returns a
 * section element with a list of EventItem components.
 * @param props - {items: Array(3)}
 * @returns An array of EventItem components.
 */
function eventList(props) {

    const {items} = props;
    
  return (
    <section>
      <ul className={classes.list}>
        {items.map((event) => {
          return <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            image={event.image}
            location={event.location}
          />;
        })}
      </ul>
    </section>
  );
}

export default eventList;
