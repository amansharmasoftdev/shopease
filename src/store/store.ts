import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { productReducer } from "./reducers/getProductReducer";
import getJewReducer from "./reducers/getJewReducer";
import rootSaga from "./rootSaga";
import createProductReducer from "./reducers/createProductReducer";
import CommentReducer from "./reducers/commentReducer";
import loaderReducer from "./reducers/common/loaderReducer";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers
const rootReducer = combineReducers({
  products: productReducer,
  getJew: getJewReducer,
  createdProducts: createProductReducer,
  comments: CommentReducer,
  loader: loaderReducer,
});

// Configure the store with saga middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Run the saga
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
