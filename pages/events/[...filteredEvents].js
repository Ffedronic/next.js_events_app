import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/eventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert";
import Head from 'next/head'

function FilteredEventsPage(props) {

  if (props.hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please check your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.filteredEvents;
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          {" "}
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <Fragment>
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content={`All events for ${props.date.year}/${props.date.month}`}/>
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = context.params.filteredEvents;
  const filteredYear =  await filterData[0];
  const filteredMonth =  await filterData[1];

  const numYear = await +filteredYear;
  const numMonth = await +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
      filteredEvents: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      }
    },
  };
}
export default FilteredEventsPage;
