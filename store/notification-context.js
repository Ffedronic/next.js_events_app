import { createContext, useState, useEffect } from "react";

/* It's creating a context object. */
const NotificationContext = createContext({
  notificaton: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

/**
 * It's a React component that provides a context object to its children.
 *
 * The context object has three properties:
 *
 * - notificaton: the current notification data
 * - showNotification: a function that sets the current notification data
 * - hideNotification: a function that clears the current notification data
 *
 * The context object is provided to the children via the React Context API.
 *
 * The context object is created using the useState hook.
 *
 * The useState hook is a React hook that allows you to create state in a functional component.
 *
 * The useState hook takes one argument: the initial state.
 *
 * The useState hook returns an array with two elements:
 *
 * - the current state
 * - a function that allows you to update the state
 *
 * The useState hook is used to create a
 * @param props - The props that are passed to the component.
 * @returns The context object is being returned.
 */
export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" || activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timer)
    };
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notificaton: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };
  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}
export default NotificationContext;
