import { getFeaturedEvents } from "../data";
import EventList from "../components/eventList";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <main>
      <h1>The Home Page</h1>
      <EventList items={featuredEvents}/>
    </main>
  );
}

export default HomePage;
