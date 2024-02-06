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
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        {/* Video Player */}
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={
              "https://www.youtube.com/embed/" + vidId + "?autoplay=1&mute=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* LiveChat */}
        <div className="w-full">
          <LiveChat />
        </div>
      </div>

      {/* WatchPageDetails */}
      <div className="my-3 ">
        <WatchPageDetails videoId={vidId} />
      </div>

      {/* Comments */}
      <div className="w-2/3">
      <CommentsContainer />
      </div>
     
    </div>
  );
};

export default WatchPage;
