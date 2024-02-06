const GOOGLE_API_KEY = "AIzaSyCPriQ9-CRfQS_iXhtkE2K1aev7LH3LPxw";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const VIDEO_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";
