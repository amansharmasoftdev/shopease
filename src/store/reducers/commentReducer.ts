import {
  Comments,
  CommentState,
  commentTypes,
  initialCommentState,
} from "../types/commentType";

export interface createProductState {
  comments: Comments[];
  loading: boolean;
  error: string | null;
}
const CommentReducer = (
  state = initialCommentState,
  action: any
): createProductState => {
  console.log(action, "==action in reducer for comment");

  switch (action.type) {
    case commentTypes.FETCH_COMMENTS_REQUEST:
      return { ...state, loading: true, error: null };
    case commentTypes.FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, loading: false };
    case commentTypes.FETCH_COMMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default CommentReducer;
