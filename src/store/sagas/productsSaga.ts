import { AxiosResponse } from "axios";
import api from "../../api/api";
import { getProductTypes, Product } from "../types/productType";
import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "http";
import { getProductSuccessAction } from "../actions/productsAction";
import { closeLoader, openLoader } from "../actions/common/actions";

function* cartSaga() {
  try {
    yield put(openLoader());
    const response: AxiosResponse<Product[]> = yield call(api.get, "products");
    console.log(response.data, "==created products");
    yield put(getProductSuccessAction(response.data));
    yield put(closeLoader());
  } catch (error) {
    // Handle the error if needed
    console.error("Failed to load products:", error);
    yield put(closeLoader());
  }
}

export default cartSaga;

export function* watchGetProductSaga() {
  yield takeLatest(getProductTypes.GET_PRODUCTS_REQUEST, cartSaga);
}
