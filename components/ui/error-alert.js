import classes from './error-alert.module.css';

/**
 * This function takes in a prop called children and returns a div with the className of alert and the
 * value of the children prop.
 * @param props - This is the object that contains all the properties that are passed to the component.
 * @returns A React element.
 */
function ErrorAlert(props) {

  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
