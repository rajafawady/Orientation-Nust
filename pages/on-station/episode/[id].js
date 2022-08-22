import React from "react";
import videos from "../../../util/episodes.json";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";

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
  };
  const prevVideo = getPrevVideo();

  const getNextVideo = () => {
    const index = videos.findIndex((vid) => vid.id === id);
    if (index === videos.length - 1) {
      return videos[0];
    }
    return videos[index + 1];
  };
  const nextVideo = getNextVideo();

  console.log("video is ", video);
  console.log("nextVideo is ", nextVideo);
  console.log("prevVideo is ", prevVideo);
  return (
    <>
      {video && (
        <Layout title={`Episode ${video.id}`}>
          <div className="flex flex-col items-center">
            <div className="font-vogue text-5xl sm:text-7xl font-bold ">ON Station</div>
            <div className="font-montserrat text-3xl sm:text-5xl pt-2 sm:pt-4">{video.title}</div>
            <div className="font-montserrat text-sm sm:text-lg text-center px-4 sm:px-20 py-4 sm:py-8">
              {video.description}
            </div>
            <div className="flex justify-center w-full mb-10 md:mb-20">
              <div
                className={`${
                  video.id === 1 ? "pointer-events-none" : ""
                }flex px-2`}
              >
                <Link href={`/on-station/episode/` + prevVideo.id}>
                  <div className="my-auto cursor-pointer dark:text-pale-pink text-tyrian-purple  md:px-2  z-3">
                    <FontAwesomeIcon icon={faCaretLeft} className="text-5xl sm:text-7xl md:text-8xl" />
                  </div>
                </Link>
              </div>
              <div className="bg-ultra-red dark:bg-tyrian-purple flex flex-col items-center w-full p-2 sm:p-4">
                <div className="relative overflow-hidden w-full pt-[56%]">
                  <iframe
                    src={video.url}
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                    scrolling="no"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <div className=" flex px-2">
                <Link href={`/on-station/episode/` + nextVideo.id}>
                  <div className="my-auto cursor-pointer dark:text-pale-pink text-tyrian-purple  md:px-2 ">
                    <FontAwesomeIcon icon={faCaretRight} className=" text-5xl sm:text-7xl  md:text-8xl" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default episode;
