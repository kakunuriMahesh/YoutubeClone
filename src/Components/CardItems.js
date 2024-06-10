import React from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AiOutlineLike } from "react-icons/ai";

const CardItems = (props) => {
  const data = props.item;
  const items = data.items;
  // console.log(items);

  const calView = (view) => {
    if (view.length >= 7) {
      return view.slice(0, view.length - 6) + "M";
    } else if (view.length > 4) {
      return view.slice(0, 3) + "k";
    } else {
      return view;
    }
  };

  return (
    <div className=" grid grid-cols-3">
      {items.map((eachItem, index) => (
        <Link key={eachItem.id} to={"/watch?v="+eachItem.id}>
          <div key={index} className=" rounded-md m-3 cursor-pointer ">
            <img
              className=" rounded-t-lg"
              alt="thumbnail"
              src={eachItem.snippet.thumbnails.medium.url}
            />
            <h6 className=" font-bold hover:underline ">
              {eachItem.snippet.localized.title.slice(0, 35)}...
            </h6>
            <p>{eachItem.snippet.channelTitle}</p>
            <div className="flex justify-between">
              <div className="flex items-center">
                <p>{calView(eachItem.statistics.viewCount)}</p>
                <FaRegEye className=" ml-1" />
              </div>
              {/* <div className="flex items-center">
              <p>{eachItem.statistics.likeCount}</p>
              <AiOutlineLike  className=" ml-1"/>
            </div> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardItems;
