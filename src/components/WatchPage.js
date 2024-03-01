import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import WatchPageDetails from "./WatchPageDetails";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const vidId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="w-full flex mx-20">
      <div className=" m-2 w-4/6">
        {/* Video Player */}
        <div className="h-[500px]">
          <iframe
            className="rounded-xl w-full h-full"
            src={
              "https://www.youtube.com/embed/" + vidId + "?autoplay=1&mute=0"
            }
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* WatchPageDetails */}
        <div className="my-3">
          <WatchPageDetails videoId={vidId} />
        </div>

        {/* Comments */}
        <div className="">
          <CommentsContainer />
        </div>
      </div>

      {/* LiveChat */}
      <div className="m-2 w-2/6">
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;
