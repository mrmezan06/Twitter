const postReducer = (
  state = { post: [], error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "UPLOAD_START":
      return {
        ...state,
        uploading: true,
        error: false,
      };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        post: [action.data, ...state.post],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return {
        ...state,
        uploading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default postReducer;
