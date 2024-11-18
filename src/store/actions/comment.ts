import {
  fetchCommentsRequestAction,
  commentTypes,
  fetchCommentsSuccessAction,
  Comments,
  fetchCommentsFailureAction,
} from "../types/commentType";

const createFetchCommentRequest = (action: any): fetchCommentsRequestAction => {
  return {
    type: commentTypes.FETCH_COMMENTS_REQUEST,
    payload: action.payload,
  };
};

const createFetchRequestSuccess = (
  action: Comments[]
): fetchCommentsSuccessAction => {
  return {
    type: commentTypes.FETCH_COMMENTS_SUCCESS,
    payload: action,
  };
};

const createFetchRequestFailure = (error: any): fetchCommentsFailureAction => {
  return {
    type: commentTypes.FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

export {
  createFetchCommentRequest,
  createFetchRequestSuccess,
  createFetchRequestFailure,
};
