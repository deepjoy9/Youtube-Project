import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link className="font-bold py-1 flex items-center rounded-lg hover:bg-gray-100" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="py-1 flex items-center rounded-lg hover:bg-gray-100" to="/shorts">
          Shorts
          </Link>
        </li>
        <li className="py-1 flex items-center rounded-lg hover:bg-gray-100">
          Subscriptions
        </li>
      </ul>
      <h1 className="font-bold pt-5">You &gt;</h1>
      <ul>
        <li>Your channel</li>
        <li>History</li>
        <li>Your videos</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
      </ul>
    </div>
  );
};

export default SideBar;
