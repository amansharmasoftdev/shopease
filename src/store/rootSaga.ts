import { all } from "redux-saga/effects";
import watchCreateCommentSaga from "./sagas/commentSaga";

export default function* rootSaga() {
  yield all([watchCreateCommentSaga()]);
}
