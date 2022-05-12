import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data";
import EventList from "../../components/eventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/results-title";
import classes from "../../components/results-title.module.css";
import Button from "../../components/ui/button";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.filteredEvents;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return <p className="center">Invalid filter. Please check your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <Fragment>
      <p className="center">No events found for the chosen filter!</p>
      
    </Fragment>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date}/>
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
