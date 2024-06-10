import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"))
  const clickedCardParams = searchParams.get("v");
  // console.log(clickedCardParams);
  return (
    <div className="h-full">
      <h1>
        <Link to="/">one</Link>
      </h1>
      <iframe
        width="517"
        height="291"
        src={"https://www.youtube.com/embed/"+clickedCardParams}
        title="AP Politics Troll | Pawan Kalyan | Ys Jagan | Chandrababu Naidu | Janasena | Tdp | Ysrcp"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
