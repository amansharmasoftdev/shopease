import {
  FetchPostsFailureAction,
  FetchPostsRequestAction,
  FetchPostsSuccessAction,
  PostActionTypes,
} from "../types/dataTypes";

export const FetchPostsRequest = (): FetchPostsRequestAction => {
  return {
    type: PostActionTypes.FETCH_POSTS_REQUEST,
  };
};

export const FetchPostsRequestSuccess = (
  data: any[]
): FetchPostsSuccessAction => {
  return {
    type: PostActionTypes.FETCH_POSTS_SUCCESS,
    payload: data,
  };
};

export const FetchPostsRequestFailure = (
  error: string
): FetchPostsFailureAction => {
  return {
    type: PostActionTypes.FETCH_POSTS_FAILURE,
    payload: error,
  };
};
