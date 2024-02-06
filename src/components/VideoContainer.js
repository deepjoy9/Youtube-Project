import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isOpen);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return videos.length===0? (<Shimmer/>):(
    <div className={'m-3 h-screen p-auto ' + (isMenuOpen ? 'grid grid-cols-3': ' grid grid-cols-4')}>
      {/*{videos[0] && <AdVideoCard info={videos[0]} />}*/}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
