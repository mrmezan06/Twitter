import React from "react";
import "./FollowersCard.css";

import { Followers } from "../../Data/FollowersData";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/AuthAction";

const FollowersCard = () => {
  const dispatch = useDispatch();
  const logoutBtn = () => {
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div className="FollowersCard">
      <button className="btn-share ps-button" onClick={logoutBtn}>
        Logout
      </button>
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img
                src={follower.img}
                alt={follower.name}
                className="followerImg"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;

// 52:25
