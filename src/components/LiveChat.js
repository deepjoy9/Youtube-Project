import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  const sendMessage = () => {
    dispatch(
      addMessage({
        name: "Deepjoy Sarkar",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <div className="h-[550px] border border-gray-200 flex flex-col rounded-lg">
      <div className="flex justify-between items-center border-b m-0 p-2">
        <span>Live Chat</span>
      </div>

      <div className="p-2 overflow-y-scroll border h-full flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="flex justify-between items-center"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          className="rounded-lg w-full ml-2 p-2"
          type="text"
          placeholder="Type your message here..."
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="p-2 hover:bg-slate-100 bg-slate-300 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
