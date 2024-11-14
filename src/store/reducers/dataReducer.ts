import { PostActionTypes, PostsState } from "../types/dataTypes";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: "",
};

const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case PostActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
