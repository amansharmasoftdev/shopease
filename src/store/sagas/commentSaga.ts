import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../api/api";
import {
  Comments,
  commentTypes,
  fetchCommentsRequestAction,
} from "../types/commentType";
import { createFetchRequestSuccess } from "../actions/comment";
import { closeLoader, openLoader } from "../actions/common/actions";

function* CreateCommentSaga(action: fetchCommentsRequestAction) {
  yield put(openLoader());

  console.log(action, "==action in saga for commentSaga");
  try {
    const response: AxiosResponse<Comments[]> = yield call(
      api.get,
      `comments?postId=${action.payload}`
    );
    console.log(response.data, "==created comments");
    yield put(createFetchRequestSuccess(response.data));
    yield put(closeLoader());
  } catch (error) {
    // Handle the error if needed
    console.error("Failed to load comments:", error);
    yield put(closeLoader());
  }
}

function* watchCreateCommentSaga() {
  yield takeLatest(commentTypes.FETCH_COMMENTS_REQUEST, CreateCommentSaga);
}

export default watchCreateCommentSaga;
