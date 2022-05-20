import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/eventList";
import EventSearch from "../../components/event-search";
import Head from "next/head";
function EventsPage(props) {

  const router = useRouter();

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

export async function getStaticProps(context) {
  const loadedData = await getAllEvents();
  return {
    props: {
      data: loadedData,
    }
  }
}
export default EventsPage;
