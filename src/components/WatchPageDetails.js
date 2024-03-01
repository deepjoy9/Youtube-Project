import React from "react";
import { useEffect } from "react";
import { VIDEO_API } from "../utils/constants";
import { useState } from "react";

const WatchPageDetails = ({ videoId }) => {
  const [videoDetails, setVideoDetails] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const { title, channelTitle } = videoDetails?.snippet || {};
  const fetchData = async () => {
    const data = await fetch(VIDEO_API + "&id=" + videoId);
    const json = await data.json();
    setVideoDetails(json?.items[0]);
  };

  return videoDetails == null ? (
    <div></div>
  ) : (
    <div className="flex flex-col w-full">
      <div className=" text-xl font-medium m-4">{title}</div>
      <div className="flex items-center">
        {/*<FaUserCircle size={35}/>*/}
        <div className="flex flex-col m-4">
          <div className="font-semibold font-base">{channelTitle}</div>
          <div className=" text-gray-500 text-xs">4.14M subscribers</div>
        </div>
        <button className=" text-white bg-black rounded-3xl p-2 px-3 m-2 text-sm font-medium">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default WatchPageDetails;
