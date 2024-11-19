import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import CommentReducer from "./reducers/commentReducer";
import loaderReducer from "./reducers/common/loaderReducer";
import getProductReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/common/authReducer";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine reducers
const rootReducer = combineReducers({
  products: getProductReducer,
  comments: CommentReducer,
  loader: loaderReducer,
  cart: cartReducer,
  auth: authReducer,
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
