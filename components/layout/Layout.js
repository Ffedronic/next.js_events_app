import { Fragment } from "react";

import MainHeader from "./Main-header";

/**
 * Layout is a function that returns a fragment that contains a MainHeader component and a main element
 * that contains the children of the Layout component.
 * @param props - This is the props object that is passed to the component.
 * @returns A fragment of the MainHeader and the main component.
 */
function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
