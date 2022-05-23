import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/eventList";
import EventSearch from "../../components/events/event-search";
import Head from "next/head";

/**
 * It takes two parameters, year and month, and then uses the router.push method to navigate to the
 * fullPath
 * @param props - The props that are passed to the component.
 * @returns The EventsPage component is being returned.
 */
function EventsPage(props) {

  const router = useRouter();

  /**
   * It takes two parameters, year and month, and then uses the router.push method to navigate to the
   * fullPath
   * @param year - the year of the event
   * @param month - The month to find events for.
   */
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="find a lot of great events that allows you to evolve..."/>
      </Head>
      <h1 className="center">All Events</h1>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={props.data} />
    </Fragment>
  );
}

/**
 * This function will be called at build time and will return an object with a props property that will
 * be passed to the page component as props.
 * @param context - An object with the following properties:
 * @returns An object with a props property.
 */
export async function getStaticProps(context) {
  
  const loadedData = await getAllEvents();
  
  return {
    props: {
      data: loadedData,
    }
  }
}

export default EventsPage;
