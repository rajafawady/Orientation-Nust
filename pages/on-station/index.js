import React from "react";
import Layout from "../../components/Layout";
import EpisodeCard from "../../components/EpisodeCard";
import videos from "../../util/episodes.json";

export const getStaticProps = async () => {
  return {
    props: {
      videos: videos,
    },
  };
};

const on_station = ({ videos }) => {
  return (
    <>
      <Layout title={"ON Station"}>
        <div className="flex flex-col items-center">
          <div className="text-7xl font-vogue">ON Station</div>
          <div className="px-10 self-start w-full">
            <div className="text-4xl font-montserrat ">Episodes</div>
            {videos.map((video) => (
              <EpisodeCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default on_station;