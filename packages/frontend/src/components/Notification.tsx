import React from "react";
import { Alert, AlertColor, Snackbar, Stack } from '@mui/material';
import useNotification from "../hooks/useNotification";

export interface NotificationType {
  message?: string;
  severity: AlertColor;
}

const HIDE_DURATION = 5000;

const Notification = () => {
  const { notification, removeNotification } = useNotification();
  return (
    <div>
      <Snackbar
        style={{
          position: "fixed",
          zIndex: 10000,
          right: "25px",
          top: "75px",
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={!!notification}
        autoHideDuration={HIDE_DURATION}
        onClose={removeNotification}
      >
        <Alert severity={notification?.severity} variant="filled" onClose={removeNotification}>
          {notification?.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notification;
