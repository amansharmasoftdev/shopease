import { all } from "redux-saga/effects";
import watchCreateCommentSaga from "./sagas/commentSaga";
import { watchGetProductSaga } from "./sagas/productsSaga";

export default function* rootSaga() {
  yield all([watchCreateCommentSaga(), watchGetProductSaga()]);
}
