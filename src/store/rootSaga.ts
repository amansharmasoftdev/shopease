import { all } from "redux-saga/effects";
import watchFetchPostSaga from "./sagas/dataSaga";
import { watchFetchProducts } from "./sagas/getProductSaga";
import { watchFetchGetJewSaga } from "./sagas/getJewSaga";
import watchCreateProductSaga from "./sagas/createProductSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPostSaga(),
    watchFetchProducts(),
    watchFetchGetJewSaga(),
    watchCreateProductSaga(),
  ]);
}
