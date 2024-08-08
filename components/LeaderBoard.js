import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import { BiSearch } from 'react-icons/bi';
import Pagination from './Pagination';
import { leaderboardCollection } from '../services/firebase';
import { getDocs, orderBy, query } from 'firebase/firestore';

const Leaderboard = ({ leaderboard, setLeaderboard }) => {

  const itemsPerPage = 30

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    leaderboard.length === 0 && getLeaderboardContent()
  }, [])

  const getLeaderboardContent = async () => {
    try {
      setLoading(true)
      const q = query(leaderboardCollection, orderBy('score', 'desc'))
      const docs = await getDocs(q)

      let fetched = []
      docs.forEach(doc => {
        fetched.push({ id: doc.id, ...doc.data() })
      })

      setTotalPages(Math.ceil(fetched.length / itemsPerPage))
      setLoading(false)
      setLeaderboard(fetched)
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3 mt-10 mb-8'>
        <div className='w-1/4 h-[3px] bg-coral'></div>
        <h1 className='my-3 p-4 shrink-0 heading text-4xl'>Leaderboard</h1>
        <div className='w-1/4 h-[3px] bg-coral'></div>
      </div>

      <div className='sm:px-32 w-full' >
        <div className="overflow-hidden rounded w-full ">
          <div className="max-w-full overflow-x-auto border border-purple/10 rounded ">
            {/* table header start */}
            <div className="grid grid-cols-3 px-4 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-7 bg-olive-green/10">
              <div className="col-span-1">
                <h5 className="text-center font-bold text-[#1C2434] dark:text-bodydark">
                  Name
                </h5>
              </div>
              <div className="col-span-1">
                <h5 className="text-center font-bold text-[#1C2434] dark:text-bodydark">
                  Program
                </h5>
              </div>
              <div className="col-span-1">
                <h5 className="text-center font-bold text-[#1C2434] dark:text-bodydark">
                  Score
                </h5>
              </div>
            </div>
            {/* table header end */}

            {/* table body start */}
            <div className="dark:bg-boxdark bg-white ">
              {loading
                ?
                <div className='flex justify-center items-center w-full h-full min-h-[15rem] ' >
                  <span className="loader" />
                </div>
                : leaderboard?.length == 0
                  ?
                  <div className="w-full h-40 flex justify-center items-center ">
                    <p className="text-center text-purple/70 dark:text-bodylight">No content found</p>
                  </div>
                  :
                  leaderboard?.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((user, index) => {
                    return (
                      <div key={index} className="grid grid-cols-3 border-t border-[#EEEEEE] px-4 py-4 dark:border-strokedark lg:px-7.5 2xl:px-7">
                        <div className="col-span-1">
                          <p className="text-center text-purple ">
                            {user?.name}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <p className="text-center text-purple ">
                            {user?.program}
                          </p>
                        </div>
                        <div className="col-span-1">
                          <p className="text-center text-purple ">
                            {user?.score}
                          </p>
                        </div>
                      </div>
                    );
                  })
              }
            </div>

            {/* Pagination */}
            {
              totalPages > 1 &&
              <div className="w-full flex justify-center mt-4 mb-2">
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(_, page) => setPage(page)}
                />
              </div>
            }
            {/* table body end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
