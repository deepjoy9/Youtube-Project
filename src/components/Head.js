import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  SEARCH_SUGGESTIONS_API,
  TOGGLE_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (searchQuery.trim() === "") {
      return;
    }
    try {
      const data = await fetch(SEARCH_SUGGESTIONS_API + searchQuery);
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await data.json();
      setSuggestions(json[1]);

      //update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-5">
      <div className="flex m-1 col-span-2 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={TOGGLE_ICON}
        />
        <a href="/">
          <img className="h-8 mx-2" alt="youtube-logo" src={YOUTUBE_LOGO} />
        </a>
      </div>
      <div className="m-1 col-span-6">
        <div className="w-full flex items-center">
          <input
            className=" w-8/12 border-slate-300 border rounded-l-2xl m-0 mr-0 text-base h-9 px-4 focus:outline-none focus:shadow-outline focus:border-blue-700"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={() => setShowSuggestions(true)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          ></input>
          <button className="border-slate-300 border rounded-r-2xl ml-0 p-2 h-9 hover:bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white  w-2/5 rounded-2xl">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="m-1  col-span-2">
        <img className="h-8 float-right" alt="user-icon" src={USER_ICON}></img>
      </div>
    </div>
  );
};
export default Head;
