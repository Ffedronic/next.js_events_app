import Link from "next/link";

import classes from "./main-header.module.css";

/**
 * It returns a header element with a logo and a navigation bar
 * @returns A header with a logo and a navigation bar.
 */
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
