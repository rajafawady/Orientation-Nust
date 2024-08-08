// pages/index.js
import { useEffect, useState } from 'react';
import ZoomedImage from '../components/ZoomedImage';
import Leaderboard from '../components/LeaderBoard';
import Layout from "../components/Layout";
import GetNameModal from '../components/GetNameModal.jsx';
import { Toaster } from 'react-hot-toast';


export default function Game() {

  const [currentUser, setCurrentUser] = useState(null);
  const [openModal, setOpenModal] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    if (localStorage?.getItem('user')) {
      setCurrentUser(JSON.parse(localStorage.getItem('user')))
      setOpenModal(false)
    }
  }, [])

  return (
    <Layout title={"Game"}>
      <Toaster position='bottom-left' />

      <div className="flex items-center justify-center w-full min-h-screen relative"  >
        {openModal && <GetNameModal
          currentUser={currentUser}
          setCurrenUser={setCurrentUser}
          setOpenModal={setOpenModal}
          setCurrentImage={setCurrentImage}
        />}
        <div className="flex flex-col items-center justify-start gap-4 sm:gap-0 min-h-screen w-full sm:px-10">
          <ZoomedImage
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            setOpenModal={setOpenModal}
            setCurrentImage={setCurrentImage}
            currentImage={currentImage}
            setLeaderboard={setLeaderboard}
          />
          <Leaderboard
            leaderboard={leaderboard}
            setLeaderboard={setLeaderboard}
          />
        </div>
      </div>
    </Layout >
  );
}
