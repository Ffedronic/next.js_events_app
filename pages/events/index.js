import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../data";
import EventList from "../../components/eventList";
import EventSearch from "../../components/event-search";

function EventsPage() {
  const events = getAllEvents();

  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <h1>All Events</h1>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default EventsPage;
