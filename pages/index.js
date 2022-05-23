import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/eventList";
import NewsletterRegistration from '../components/input/newsletter-registration';


function HomePage(props) {

/* Calling the function getFeaturedEvents() and assigning the result to the variable featuredEvents. */
  const featuredEvents = getFeaturedEvents();
  
  return (
    <main>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="find a lot of great events that allows you to evolve..."/>
      </Head>
      <h1 className="center">The Home Page</h1>
      <NewsletterRegistration/>
      <EventList items={props.data} />
    </main>
  );
}

/**
 * When the page is built, get the data from the API and pass it to the page as props.
 * @param context - An object with the following properties:
 * @returns An object with a props property.
 */
export async function getStaticProps(context) {
  
  const loadedData = await getFeaturedEvents();
  
  return {
    props: {
      data: loadedData,
    }
  }
}

export default HomePage;
