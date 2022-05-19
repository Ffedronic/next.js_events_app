import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

import { getEventById, getAllEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/error-alert";

function EventsDetailsPage(props) {
  const { event } = props;
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const userId = await params.eventId;

  const event = await getEventById(userId);
  return {
    props: {
      event: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true
  };
}

export default EventsDetailsPage;
