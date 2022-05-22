import EventItem from "./eventItem";

import classes from "./evenList.module.css"

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
