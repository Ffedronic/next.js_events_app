/**
 * Get all events, then filter out the ones that are not featured.
 * @returns An array of events that have the property isFeatured set to true.
 */
export async function getFeaturedEvents() {
  const DUMMY_EVENTS = await getAllEvents();

  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

/**
 * It fetches the data from the database, converts it to JSON, and then pushes it into an array.
 *
 * The reason why we're doing this is because the data we get from the database is in an object format,
 * and we want to convert it into an array.
 *
 * The reason why we want to convert it into an array is because we want to be able to use the map()
 * method on it.
 *
 * The reason why we want to use the map() method on it is because we want to be able to render each
 * event as a separate card.
 *
 * The reason why we want to render each event as a separate card is because we want to be able to
 * display each event on the page.
 *
 * The reason why we want to display each event on the page is because we want to be able to see the
 * events.
 *
 * The reason why we want to be able to
 * @returns An array of objects.
 */
export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-5c4ff-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();

  const DUMMY_EVENTS = [];
  for (const key in data) {
    DUMMY_EVENTS.push({
      id: key,
      ...data[key],
    });
  }

  return DUMMY_EVENTS;
}

/**
 * It returns the event with the given id from the array of events.
 * @param id - The id of the event you want to get.
 * @returns The event object with the matching id.
 */
export async function getEventById(id) {
  const DUMMY_EVENTS = await getAllEvents();

  return DUMMY_EVENTS.find((event) => event.id === id);
}

/**
 * It returns an array of events that match the year and month of the dateFilter object.
 * @param dateFilter - { year: 2020, month: 1 }
 * @returns An array of events that match the year and month passed in.
 */
export async function getFilteredEvents(dateFilter) {
  
  const { year, month } = dateFilter;

  const DUMMY_EVENTS = await getAllEvents();

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);

    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
