import React from "react";
import "./PostShare.css";
import ProfileImage from "../../img/profileImg.jpg";

import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, uploadImage } from "../../actions/UploadAction";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  const { user } = useSelector((state) => state.auth.authData);
  const descRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.post.uploading);

  const reset = () => {
    setImage(null);
    descRef.current.value = "";
  };

  const handleShare = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: descRef?.current.value,
    };
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newPost.image = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
      console.log(newPost);
    }
    dispatch(createPost(newPost));
    reset();
  };

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input ref={descRef} type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button
            className="btn-share ps-button"
            onClick={handleShare}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;

// 1:36:00
