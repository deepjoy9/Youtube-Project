import React from "react";
import { Link } from "react-router-dom";
import { USER_ICON } from "../utils/constants";

const SearchCard = ({ data }) => {
  const { thumbnails, title, channelTitle, description } = data?.snippet || {};
  const { videoId } = data?.id || {};
  return (
    <div className="m-2 my-5 hover:bg-slate-100 rounded-md p-2 duration-200 scale-105">
      <Link to={"/watch?v=" + videoId}>
        <div className="flex flex-row">
          <img
            className="rounded-xl"
            alt="thumbnail"
            src={thumbnails?.medium?.url}
          />
          <div className="ml-4 ">
            <h1 className=" font-medium text-lg ">{title}</h1>
            <div className="flex text-sm items-center mt-5">
              <img className="w-8 h-8" alt="user" src={USER_ICON} />
              <span className="ml-2">{channelTitle}</span>
            </div>
            <div className="line-clamp-1 text-sm text-gray-700 my-2">
              {description}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
