import {
  FETCH_JEW_FAILURE,
  FETCH_JEW_REQUEST,
  FETCH_JEW_SUCCESS,
  JewState,
} from "../types/getJewType";

const initialState: JewState = {
  Jew: [],
  loading: false,
  error: null,
};
const getJewReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_JEW_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JEW_SUCCESS:
      return { ...state, loading: false, Jew: action.payload };
    case FETCH_JEW_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getJewReducer;
