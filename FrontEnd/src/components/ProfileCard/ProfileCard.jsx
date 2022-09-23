import React, { useEffect } from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

import { useSelector } from "react-redux";
import axios from "axios";

const ProfileCard = () => {
  const ProfilePage = true;
  const { user } = useSelector((state) => state.auth.authData);
  // console.log(user._id);
  // getting number of posts
  const [postCount, setPostCount] = React.useState(0);
  const getPosts = async (id) => {
    const data = await axios.get(`http://localhost:5000/post/${id}/posts`);
    // console.log(data.data.length);
    setPostCount(data.data.length);
  };

  useEffect(() => {
    getPosts(user?._id);
  }, [user?._id]);

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>{user.firstname + " " + user.lastname}</span>
        <span>Senior UI/UX Designer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{postCount}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
