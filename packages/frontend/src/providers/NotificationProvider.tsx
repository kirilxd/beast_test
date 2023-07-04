import React, { useState, useCallback } from "react";
import { NotificationType } from "../components/Notification";

export const NotificationContext = React.createContext<any>({
  notification: {},
  showNotification: () => {},
  removeNotification: () => {},
});

function NotificationProvider({ children }: any) {
  const [notification, setNotification] = useState<NotificationType | null>(null);

  const removeError = () => setNotification(null);

  const addError = (error: NotificationType) => setNotification(error);

  const contextValue: {
    notification: any,
    showNotification: any,
    removeNotification: any
  } = {
    notification,
    showNotification: useCallback(
      ({ message, severity }: NotificationType) => addError({ message, severity }),
      []
    ),
    removeNotification: useCallback(() => removeError(), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
export default NotificationProvider;
