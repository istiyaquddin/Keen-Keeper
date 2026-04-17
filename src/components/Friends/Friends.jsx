
import React from "react";
import FriendCard from "../FriendCard/FriendCard";
import Data from "@/data/friends.json"


const Friends =  () => {


  return (
    <div className=" mt-20 m-w-7xl   mx-auto p-4">
      <h2 className="pb-8 text-2xl font-semibold">Your Friends</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Data.map((friend, ind) => (
          <FriendCard key={ind} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
