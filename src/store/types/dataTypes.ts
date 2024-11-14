// src/store/types/dataTypes.ts
export interface PostsState {
  posts: PostResponse[]; // Replace `any` with the post type
  loading: boolean;
  error: string | null;
}

export enum PostActionTypes {
  FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE",
}

export interface FetchPostsRequestAction {
  type: PostActionTypes.FETCH_POSTS_REQUEST;
}

export interface FetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: any[];
}

export interface FetchPostsFailureAction {
  type: PostActionTypes.FETCH_POSTS_FAILURE;
  payload: string;
}

// Union type for all post actions
export type PostActions =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}
