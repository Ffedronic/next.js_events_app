import Link from "next/link";

import classes from "./button.module.css";

/**
 * If the button has a link property, it will return a Link component with the href property set to the
 * link property. If it doesn't, it will return a button component
 * @param props - This is the object that contains all the properties that are passed to the component.
 * @returns A function that takes in props and returns a Link component or a button component.
 */
function Button(props) {

  /* Checking if the button has a link property. If it does, it will return a Link component with the
  href property set to the link property. If it doesn't, it will return a button component. */
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
