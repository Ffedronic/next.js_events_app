import { getAllEvents } from "../../data";
import EventList from "../../components/eventList";
import EventSearch from "../../components/event-search"

function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <h1>All Events</h1>
      <EventSearch/>
      <EventList items={events} />
    </div>
  );
}

export default EventsPage;
