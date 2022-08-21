import React from "react";
import Link from "next/link";

const EpisodeCard = ({ video }) => {
  return (
    <Link href={`/on-station/episode/` + video.id}>
      <div
        className={`flex flex-col cursor-pointer
      px-4 py-2 my-4  
      bg-pale-pink dark:bg-tyrian-purple 
      border-l-8 border-l-pale-pink hover:border-l-tyrian-purple
      dark:border-l-tyrian-purple dark:hover:border-l-pale-pink
      `}
      >
        <div className="font-montserrat text-2xl mb-1">{video.title}</div>
        <div className="font-mont text-lg">{video.description}</div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
