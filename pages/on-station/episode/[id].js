import { useRouter } from "next/router";
import React from "react";

import videos from "../../../util/episodes.json";

import Layout from "../../../components/Layout";
import Image from "next/image";

const Episode = () => {
  const router = useRouter();
  const { id } = router.query;
  const currentVideo = videos.find((vid) => vid.id === id);

  return (
    <>
      {currentVideo && (
        <Layout title={`Episode ${currentVideo.id}`}>
          <div className="flex  flex-col items-center mt-20 text-tyrian-purple dark:text-white">
            <h1 className="font-jacklyn text-5xl sm:text-7xl font-bold mb-16">
              ON Station
            </h1>

            <div className="flex lg:flex-row flex-col justify-center w-full gap-6 px-6">
              {/* video container */}
              <div className="flex flex-col gap-1">
                <div className="relative overflow-hidden w-full aspect-[16/9]">
                  <iframe
                    src={currentVideo.url}
                    className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                    scrolling="no"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share;"
                  />
                </div>
                <h1 className="font-heading text-3xl mt-3">
                  {currentVideo.title}
                </h1>
                <p className="font-body text-sm">{currentVideo.description}</p>
              </div>

              {/* remaining video container */}
              <div className="w-full lg:max-w-xs">
                <h1 className="mb-2 text-2xl font-heading">More Videos</h1>
                <div className="flex flex-col w-full">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className={`cursor-pointer transition-colors w-full
                            ${
                              video.id === id
                                ? "bg-tyrian-purple text-white"
                                : "hover:bg-pale-pink"
                            }
                        `}
                      onClick={() =>
                        router.push(`/on-station/episode/${video.id}`)
                      }
                    >
                      <div className="max-w-md lg:max-w-xs w-full flex gap-2 items-start p-2">
                        <div className="relative overflow-hidden w-1/2 aspect-[16/9] ">
                          <Image
                            src={video.thumbnailUrl}
                            // className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                            alt={video.title}
                            layout="fill"
                          />
                        </div>

                        <div className="w-1/2">
                          <h1 className="text-lg font-subHeading mb-2">
                            {video.title}
                          </h1>
                          <p className="text-xs leading-3 font-body">
                            {video.description.slice(0, 80)}
                            {video.description.length > 80 && "..."}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Episode;
