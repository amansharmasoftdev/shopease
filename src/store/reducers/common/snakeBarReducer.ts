import { SNACKBAR_CLOSE, SNACKBAR_OPEN } from "../../actions/common";

const snackbarInitialState = {
  open: false,
  message: "",
  severity: "info", // Default severity
};

const snackbarReducer = (state = snackbarInitialState, action: any) => {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return {
        open: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case SNACKBAR_CLOSE:
      return { ...state, open: false, message: "" };
    default:
      return state;
  }
};

export default snackbarReducer;
