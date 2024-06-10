import React, { useEffect, useState } from "react";


import Category from "./Category";
import CardItems from "./CardItems";
import Shimmer from "./Shimmer";
const URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyBMYjR-6tIFYkPfn2J2RR-8HIDqDGWPZqc"

const Home = () => {
  const [apiData, setApiData] = useState(null) // pass this data to ItemCards

  useEffect(()=>{
    fetch(URL)
    .then(response=> response.json())
    .then(data => setApiData(data))
  },[])

  return (
    <div className=" w-full p-4">
      <Category/>
      {
        apiData!==null?<CardItems item={apiData}/>:<Shimmer/>
      }

    </div>
  );
};

export default Home;
