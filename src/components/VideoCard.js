const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className={"m-2 duration-200 hover:scale-105"}>
      <img
        className="rounded-xl w-full"
        alt="thumbnail"
        src={thumbnails?.medium.url}
      />

      <h1 className="font-medium my-2">{title}</h1>
      <div className="text-sm text-gray-600">
        <h2>{channelTitle}</h2>
        <h3>{statistics.viewCount}</h3>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;
