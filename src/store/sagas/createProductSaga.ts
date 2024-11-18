import { AxiosResponse } from "axios";
import {
  CreateProductActionTypes,
  CreateProductResponse,
} from "../types/createProductType";
import { call, put, takeLatest } from "redux-saga/effects";
import api from "../../api/api";
import { createProductSuccess } from "../actions/createPost";

interface CreateProductAction {
  type: typeof CreateProductActionTypes.CREATE_PRODUCT_REQUEST;
  payload: CreateProductResponse;
}

function* createProductSaga(action: CreateProductAction) {
  try {
    const response: AxiosResponse<CreateProductResponse[]> = yield call(
      api.post,
      "/posts",
      action.payload
    );
    console.log(response.data, "==created products");
    yield put(createProductSuccess(response.data));
  } catch (error) {
    // Handle the error if needed
    console.error("Failed to create product:", error);
  }
}

function* watchCreateProductSaga() {
  yield takeLatest(
    CreateProductActionTypes.CREATE_PRODUCT_REQUEST,
    createProductSaga
  );
}

export default watchCreateProductSaga;
