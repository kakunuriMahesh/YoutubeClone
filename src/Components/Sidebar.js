import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import {
  MdOutlineSubscriptions,
  MdAccessTime,
  MdPlaylistPlay,
  MdOutlineKeyboardArrowRight,
  MdSwitchAccount,
} from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";



const Sidebar = () => {
 

  // console.log()


  return (
    <div className=" h-[93%] pr-3 flex flex-col justify-between overflow-y-scroll">
      <ul className="">
        <Link to="/">
          <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
            <span className=" mr-2">
              <MdHomeFilled />
            </span>
            Home
          </li>
        </Link>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <SiYoutubeshorts />
          </span>
          Shorts
        </li>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <MdOutlineSubscriptions />
          </span>
          Subscriptions
        </li>
        <hr className=" border-black" />
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          You{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </li>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <MdSwitchAccount />
          </span>
          Your channel
        </li>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <FaHistory />
          </span>
          History
        </li>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <MdPlaylistPlay />
          </span>
          Playlists
        </li>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <RiVideoLine />
          </span>
          Your videos
        </li>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <MdAccessTime />
          </span>
          Watch later
        </li>
        <li className=" my-2 flex items-center hover:bg-slate-200 rounded-md cursor-pointer">
          <span className="mr-2">
            <AiOutlineLike />
          </span>
          Liked videos
        </li>
        <hr className=" border-black" />
        <p>Subscriptions</p>
        <li>Add +</li>
      </ul>
      <div className="">
        <p className=" text-xs">
          About Press Copyright Contact us Creators Advertise Developers
        </p>
        <p className=" text-xs">
          {" "}
          TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
