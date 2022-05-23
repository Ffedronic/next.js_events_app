import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getEventById, getAllEvents } from "../../helpers/api-util";
import ErrorAlert from "../../components/ui/error-alert";
import Comments from '../../components/input/comments';
import Head from "next/head";

function EventsDetailsPage(props) {
  
  const { event } = props;
  
  /* This is a conditional rendering. If there is no event, it will render the ErrorAlert component. */
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description}/>
      </Head>
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
      <Comments eventId={event.id} />
    </Fragment>
  );
}

/**
 * It takes the eventId from the URL and uses it to get the event data from the database.
 * @param context - An object containing the following keys:
 * @returns The event object.
 */
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

/**
 * It returns an object with a paths property that contains an array of objects with a params property
 * that contains an object with a eventId property that contains a string.
 * @returns An object with two properties:
 * - paths: An array of objects with a params property.
 * - fallback: A boolean value.
 */
export async function getStaticPaths() {
  
  const events = await getAllEvents();
  
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  
  return {
    paths: paths,
    fallback: true
  };
}

export default EventsDetailsPage;
