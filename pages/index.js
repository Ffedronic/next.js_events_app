import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/eventList";

function HomePage(props) {
  const featuredEvents = getFeaturedEvents();
  return (
    <main>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="find a lot of great events that allows you to evolve..."/>
      </Head>
      <h1 className="center">The Home Page</h1>
      <EventList items={props.data} />
    </main>
  );
}

export async function getStaticProps(context) {
  const loadedData = await getFeaturedEvents();
  return {
    props: {
      data: loadedData,
    }
  }
}
export default HomePage;
