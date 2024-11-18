import { LOADER_CLOSE, LOADER_OPEN, SNACKBAR_CLOSE, SNACKBAR_OPEN } from ".";

// actions.ts
export const openLoader = () => ({
  type: LOADER_OPEN,
});

export const closeLoader = () => ({
  type: LOADER_CLOSE,
});

export const openSnackbar = (payload: {
  message: string;
  severity: "success" | "error" | "info" | "warning";
}) => ({
  type: SNACKBAR_OPEN,
  payload,
});

export const closeSnackbar = () => ({
  type: SNACKBAR_CLOSE,
});
