import { useContext } from "react";
import { NotificationContext } from "../providers/NotificationProvider";

const useNotification = () => {
  const { notification, showNotification, removeNotification } = useContext(NotificationContext);
  return { notification, showNotification, removeNotification };
};

export default useNotification;
