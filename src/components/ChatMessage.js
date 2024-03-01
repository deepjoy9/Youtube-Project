import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex text-sm items-center m-2">
      <img className="h-8" alt="user" src={USER_ICON} />
      <span className="ml-2 text-gray-600 font-bold">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
