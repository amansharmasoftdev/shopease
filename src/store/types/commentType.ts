export enum commentTypes {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
}

export const initialCommentState = {
  comments: [],
  loading: false,
  error: null,
};

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentState {
  comments: Comments[];
  loading: boolean;
  error: string | null;
}

export interface fetchCommentsRequestAction {
  type: commentTypes.FETCH_COMMENTS_REQUEST;
  payload: any;
}

export interface fetchCommentsSuccessAction {
  type: commentTypes.FETCH_COMMENTS_SUCCESS;
  payload: Comments[];
}

export interface fetchCommentsFailureAction {
  type: commentTypes.FETCH_COMMENTS_FAILURE;
  payload: string;
}

export type CommentActionTypes =
  | fetchCommentsRequestAction
  | fetchCommentsSuccessAction
  | fetchCommentsFailureAction;
