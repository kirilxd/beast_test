import React, { useState, useCallback } from "react";
import { CustomError } from "../components/Error";

export const ErrorContext = React.createContext<any>({
  error: {},
  addError: () => {},
  removeError: () => {},
});

function ErrorProvider({ children }: any) {
  const [error, setError] = useState<CustomError | null>(null);

  const removeError = () => setError(null);

  const addError = (error: CustomError) => setError(error);

  const contextValue: {
    error: any,
    addError: any,
    removeError: any
  } = {
    error,
    addError: useCallback(
      ({ message }: CustomError) => addError({ message }),
      []
    ),
    removeError: useCallback(() => removeError(), []),
  };

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
};
export default ErrorProvider;
