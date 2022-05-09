import { getAllEvents } from "../../data";
import EventList from "../../components/eventList";

function EventsPage() {
  const events = getAllEvents();
  console.log(events);

  return (
    <div>
      <h1>All Events</h1>
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
