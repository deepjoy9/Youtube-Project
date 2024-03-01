import React from "react";
import { USER_ICON } from "../utils/constants";

const commentsData = [
  {
    name: "Deepjoy  Sarkar",
    text: "Hello I am watching the video",
    replies: [
      {
        name: "Youtube User",
        text: "Thanks for watching the video",
        replies: [],
      },
    ],
  },
  {
    name: "Deepjoy  Sarkar",
    text: "Hello I am watching the video",
    replies: [],
  },
  {
    name: "Deepjoy  Sarkar",
    text: "Hello I am watching the video",
    replies: [
      {
        name: "Youtube User",
        text: "Thanks for watching the video",
        replies: [],
      },
      {
        name: "Deepjoy  Sarkar",
        text: "Hello I am watching the video",
        replies: [
          {
            name: "Youtube User",
            text: "Thanks for watching the video",
            replies: [
              {
                name: "Deepjoy  Sarkar",
                text: "Hello I am watching the video",
                replies: [
                  {
                    name: "Youtube User",
                    text: "Thanks for watching the video",
                    replies: [
                      {
                        name: "Deepjoy  Sarkar",
                        text: "Hello I am watching the video",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Deepjoy  Sarkar",
    text: "Hello I am watching the video",
    replies: [
      {
        name: "Youtube User",
        text: "Thanks for watching the video",
        replies: [],
      },
    ],
  },
  {
    name: "Deepjoy  Sarkar",
    text: "Hello I am watching the video",
    replies: [],
  },
  {
    name: "Deepjoy  Sarkar",
    text: "Hello I am watching the video",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user" src={USER_ICON} />
      <div className="px-3">
        <p className="font-semibold">@{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-9 border-l-2 border-gray-500 pl-3">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
