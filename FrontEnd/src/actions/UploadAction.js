import * as UploadApi from "../api/UploadRequest";

export const uploadImage = (data) => async (dispatch) => {
  try {
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const post = await UploadApi.createPost(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: post.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
