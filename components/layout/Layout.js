import { Fragment, useContext } from "react";

import MainHeader from "./Main-header";

import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

/**
 * Layout is a function that returns a fragment that contains a MainHeader component and a main element
 * that contains the children of the Layout component.
 * @param props - This is the props object that is passed to the component.
 * @returns A fragment of the MainHeader and the main component.
 */
function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNofitication = notificationCtx.notificaton;
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {activeNofitication && (
        <Notification
          title={activeNofitication.title}
          message={activeNofitication.message}
          status={activeNofitication.status}
        />
      )}
    </Fragment>
  );
}

export default Layout;
