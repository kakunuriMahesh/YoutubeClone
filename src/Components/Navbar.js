import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbVideoPlus } from "react-icons/tb";
import { FaMicrophone } from "react-icons/fa6";
import youtube_icon from "./youtube_Ivon.png";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "./utils/Store";
import { search_api } from "./utils/ApiStore";
import { json } from "react-router-dom";


const Navbar = () => {
  // const [display, setDisplay] = useState(true);
  const [searchQuery, setSearchQueary] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();

  const toggleButton = () => {
    // setDisplay(!display);
    dispatch(toggleMenu());
    // console.log(dispatch(toggleMenu()))
  }; 

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200); 

    return () => {
      clearInterval(timer);
    };
  },[searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(search_api + searchQuery);
    const res = await data.json();
    setSuggestions(res[1]);
    console.log(json[1]);
  };

  const display = useSelector((store) => {
    return store.user.isMenuOpen;
  });
  // console.log(isMenuOpen) Here, getting updated state value useing useSelecter

  return (
    <div className="p-4">
      <div className="flex w-full justify-between items-center">
        <div className=" flex items-center">
          <div>
            {display ? (
              <IoMdMenu
                onClick={toggleButton}
                className=" cursor-pointer text-xl"
              />
            ) : (
              <div className=" fixed bg-white top-0 h-full w-3/12">
                <div className="flex pt-[20px]">
                  <IoMdMenu
                    onClick={toggleButton}
                    className=" cursor-pointer text-xl"
                  />
                  <img
                    src={youtube_icon}
                    alt="icon"
                    className=" w-14 h-4 cursor-pointer"
                  />
                </div>

                <Sidebar/>
              </div>
            )}
          </div>
          <img
            src={youtube_icon}
            alt="icon"
            className=" w-14 h-4 cursor-pointer"
          />
        </div>
        <div className="w-3/5 flex flex-col" >
          <form className="flex items-center justify-center rounded-lg ">
            <input
              type="search"
              placeholder="Search"
              className=" pl-5 rounded-l-lg outline border w-3/4"
              value={searchQuery}
              onChange={(e) => {
                setSearchQueary(e.target.value);
              }}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            {/* <CiSearch className=" absolute" /> */}
            <CiSearch className="w-[30px] p-[4px] cursor-pointer bg-slate-400 text-[30px] rounded-r-lg" />
          </form>
          
        <div className="w-full flex justify-center">
          {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[50%] rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
          )}
        </div>
      
        </div>

        <div className=" flex ">
          <FaMicrophone className="m-2" />
          <TbVideoPlus className="m-2" />
          <FaRegBell className="m-2" />
          <MdAccountCircle className="m-2" />
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
