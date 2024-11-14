import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { FetchPostsRequestSuccess } from "../actions/dataActions";
import { FETCH_JEW_REQUEST } from "../types/getJewType";
import api from "../../api/api";
import {
  FetchJewRequest,
  FetchJewRequestSuccess,
} from "../actions/getJewAction";

function* getJewSaga() {
  const response: AxiosResponse<any> = yield call(api.get, "/albums");
  console.log(response.data, "==jewlwry");
  yield put(FetchJewRequestSuccess(response.data));
}

export function* watchFetchGetJewSaga() {
  yield takeLatest(FETCH_JEW_REQUEST, getJewSaga);
}
