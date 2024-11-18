import { LOADER_CLOSE, LOADER_OPEN } from "../../actions/common";

const loaderInitialState = { loading: false };

const loaderReducer = (state = loaderInitialState, action: any) => {
  switch (action.type) {
    case LOADER_OPEN:
      return { loading: true };
    case LOADER_CLOSE:
      return { loading: false };
    default:
      return state;
  }
};

export default loaderReducer;
