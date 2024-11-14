import api from "../../api/api";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  PostActionTypes,
  FetchPostsFailureAction,
  PostResponse,
} from "../types/dataTypes";
import { AxiosResponse } from "axios";

function* fetchPosts() {
  try {
    const response: AxiosResponse<any[]> = yield call(api.get, "/posts");
    const data: PostResponse = yield response.data;
    yield put({
      type: PostActionTypes.FETCH_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    const errorMessage: string = error.message || "Unknown error occurred";

    yield put<FetchPostsFailureAction>({
      type: PostActionTypes.FETCH_POSTS_FAILURE,
      payload: errorMessage,
    });
  }
}

export default function* watchFetchPostSaga() {
  yield takeLatest(PostActionTypes.FETCH_POSTS_REQUEST, fetchPosts);
}
