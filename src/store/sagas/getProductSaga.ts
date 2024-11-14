// src/sagas/productSaga.ts

import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../actions/getProducts";
import { FETCH_PRODUCTS_REQUEST, Product } from "../types/getProductTypes";
import axios, { AxiosResponse } from "axios";
import api from "../../api/api";

// Fetch products from API

// Worker saga
function* fetchProductsSaga() {
  try {
    const response: AxiosResponse<any> = yield call(api.get, "/posts");
    console.log(response.data);
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    // Check if error is an instance of Error to safely access the message
    const errorMessage: string =
      error instanceof Error ? error.message : "Unknown error occurred";
    yield put(fetchProductsFailure(errorMessage));
  }
}

// Watcher saga
export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
