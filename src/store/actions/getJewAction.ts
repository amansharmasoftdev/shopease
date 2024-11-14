import {
  FETCH_JEW_FAILURE,
  FETCH_JEW_REQUEST,
  FETCH_JEW_SUCCESS,
  Jew,
  JewActionTypes,
} from "../types/getJewType";

export const FetchJewRequest = (): JewActionTypes => {
  return {
    type: FETCH_JEW_REQUEST,
  };
};

export const FetchJewRequestSuccess = (data: Jew[]): JewActionTypes => {
  console.log(data, "==data in success");
  return {
    type: FETCH_JEW_SUCCESS,
    payload: data,
  };
};

export const FetchJewRequestFailure = (error: string): JewActionTypes => {
  return {
    type: FETCH_JEW_FAILURE,
    payload: error,
  };
};
