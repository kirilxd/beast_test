import React, { useState } from "react";
import { Alert, Snackbar, Stack } from "@mui/material";
import useError from "../hooks/useError";

export interface CustomError {
  message?: string;
}

const Error = () => {
  const { error, removeError } = useError();
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
        open={!!error}
        autoHideDuration={5000}
        onClose={removeError}
      >
        <Alert severity="error" variant="filled" onClose={removeError}>
          {error?.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Error;
