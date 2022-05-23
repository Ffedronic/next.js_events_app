import { useRef } from "react";
import Button from "../ui/button";
import classes from "./event-search.module.css";

/**
 * The EventSearch function is a React component that renders a form with two select elements, one for
 * the year and one for the month. When the form is submitted, the onSearch function is called with the
 * selected year and month.
 * 
 * The EventSearch function uses the useRef hook to create two refs, one for the year input and one for
 * the month input. The refs are used to get the values of the inputs when the form is submitted.
 * 
 * The SubmitHandler function is the event handler for the form's submit event. It prevents the default
 * action, gets the values of the year and month inputs, and calls the onSearch function with those
 * values.
 * 
 * The EventSearch function returns a form with two select elements and a button. The form's submit
 * event is handled by the SubmitHandler function.
 * 
 * The EventSearch component is used in the EventDashboard component. The EventDashboard component
 * passes
 * @param props - The props object that is passed to the component.
 * @returns A form with two dropdown menus and a button.
 */
function EventSearch(props) {

  const yearInputRef = useRef();
  
  const monthInputRef = useRef();

  /**
   * When the form is submitted, prevent the default action, get the values of the year and month
   * inputs, and call the onSearch function with those values.
   * @param event - The event object that is passed to the event handler.
   */
  function SubmitHandler(event) {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth)
  }

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;
