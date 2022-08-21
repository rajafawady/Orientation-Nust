import React from "react";
import videos from "../../../util/episodes.json";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import Link from "next/link";

const episode = () => {
  const router = useRouter();
  const { id } = router.query;
  const getVideo = () => {
    return videos.find((vid) => vid.id === id);
  };
  const video = getVideo();

  const getPrevVideo = () => {
    const index = videos.findIndex((vid) => vid.id === id);
    if (index === 0) {
      return videos[videos.length - 1];
    }
    return videos[index - 1];
  }
  const prevVideo = getPrevVideo();

  const getNextVideo = () => {
    const index = videos.findIndex((vid) => vid.id === id);
    if (index === videos.length - 1) {
      return videos[0];
    }
    return videos[index + 1];
  }
  const nextVideo = getNextVideo();

  console.log("video is ", video);
  console.log("nextVideo is ", nextVideo);
  console.log("prevVideo is ", prevVideo);
  return (
    <>
      <Layout>
        {video && (
          <div className="flex flex-col items-center ">
            <div className="font-montserrat text-5xl">{video.title}</div>
            <div className="font-mont text-lg text-center px-20 py-8">{video.description}</div>
            <div className="flex justify-center w-full">
              <div
                className={`${
                  video.id === 1 ? "pointer-events-none" : ""
                }flex px-2`}
              >
                <Link href={`/on-station/episode/` + prevVideo.id}>
                  <div className="my-auto cursor-pointer">
                    <GrCaretPrevious size={60} color="white" />
                  </div>
                </Link>
              </div>
              <div className=" bg-tyrian-purple p-4">
                <iframe
                  src={video.url}
                  className="block mx-auto my-auto"
                  width="700"
                  height="392"
                  scrolling="no"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className=" flex px-2">
                <Link href={`/on-station/episode/` + nextVideo.id }>
                  <div className="my-auto cursor-pointer">
                    <GrCaretNext size={60} color="white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default episode;
