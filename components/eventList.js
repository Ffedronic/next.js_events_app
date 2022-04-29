import EventItem from "./EventItem";

function eventList(props) {
    const {items} = props;
  return (
    <section>
      <h2>The event list</h2>
      <ul>
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
