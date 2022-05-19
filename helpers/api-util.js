export async function getFeaturedEvents() {
  const DUMMY_EVENTS = await getAllEvents();
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

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

export async function getEventById(id) {
  const DUMMY_EVENTS = await getAllEvents();
  return DUMMY_EVENTS.find((event) => event.id === id);
}

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
