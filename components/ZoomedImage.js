import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { db } from '../services/firebase';
import Leaderboard from './LeaderBoard';

const ZoomedImage = ({ setCurrentUser, currentUser, setOpenModal, currentImage, setCurrentImage, setLeaderboard }) => {

  // <-------------------------------------------------- VARIABLES ------------------------------------------------------->
  const images = [
    { url: '/game/2.jpg', answer: 'NMC' },
    { url: '/game/3.jpg', answer: 'NMC' },
    { url: '/game/4.jpg', answer: 'NSTP Backyard' },
    { url: '/game/5.jpg', answer: 'NSTP Backyard' },
    { url: '/game/6.jpg', answer: 'Admin Office' },
    { url: '/game/7.jpg', answer: 'Admin Office' },
    { url: '/game/8.jpg', answer: 'Baig Transport Office' },
    { url: '/game/9.jpg', answer: 'Baig Transport Office' },
    { url: '/game/10.jpg', answer: 'Nust Lake' },
    { url: '/game/11.jpg', answer: 'Nust Lake' },
    { url: '/game/12.jpg', answer: 'NSTP Frontyard' },
    { url: '/game/13.jpg', answer: 'NSTP Frontyard' },
  ];

  // <-------------------------------------------------- STATES ------------------------------------------------------->
  const [guess, setGuess] = useState('');
  const [gameEnded, setGameEnded] = useState(false);

  // <-------------------------------------------------- FUNCTIONS ------------------------------------------------------->
  const handleSubmit = (e) => {
    e.preventDefault();
    onGuess(guess);
    setGuess('');
  };

  const onGuess = async (guess) => {
    if (!guess) return toast.error("Please enter a guess!");

    const isCorrect = guess.toLowerCase() === images[currentImage].answer.toLowerCase();

    if (isCorrect) {
      toast.success("Correct!");
      const updatedUser = { ...currentUser, score: currentUser?.score + 1 }
      setCurrentUser(updatedUser)
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setLeaderboard(pre => pre?.map(user => user.id === currentUser?.id ? updatedUser : user))
      updateUser(updatedUser)
    } else {
      toast.error(`Incorrect! The correct answer was ${images[currentImage].answer}!`);
    }

    if (currentImage === images.length - 1) {
      setGameEnded(true);
      setCurrentImage(0);
      // await getLeaderboardContent(); 
    } else {
      setCurrentImage((prev) => (prev + 2) % images.length);
    }
  };

  const updateUser = async (updates) => {
    try {
      const docRef = doc(db, 'leaderboard', currentUser?.id);
      await updateDoc(docRef, updates);
    } catch (e) {
      console.error('Error updating document: ', e);
      throw e;
    }
  }

  const onChangeUser = (e) => {
    e?.preventDefault();
    setOpenModal(true)
  }

  // <-------------------------------------------------- RENDER ------------------------------------------------------->
  return (
    <div className='flex flex-col gap-4 mt-20 w-full px-4 sm:px-8'>
      {gameEnded ? (
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold'>Game Over</h1>
          <button
            className='mt-4 bg-gradient-to-r from-purple to-coral py-3 px-8 text-white font-medium rounded-md'
            onClick={() => setGameEnded(false)}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div className='w-full flex items-center justify-center gap-1 md:gap-3 px-3'>
            <div className='w-1/4 h-[3px] bg-coral'></div>
            <h1 className='my-3 p-4 shrink-0 heading text-2xl sm:text-4xl'>NUST IN FOCUS</h1>
            <div className='w-1/4 h-[3px] bg-coral'></div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-6 gap-8 bg-olive-green/10 w-full rounded-xl p-4 sm:p-10'>
            <form onSubmit={handleSubmit} className='md:col-span-2 flex flex-col justify-start gap-4 py-4'>
              <div className='mb-6 sm:mb-12 md:mb-24 flex flex-col sm:flex-row justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <span className='w-12 h-12 capitalize rounded-full bg-purple text-3xl text-white flex justify-center items-center'>{currentUser?.name?.charAt(0)}</span>
                  <div className='flex flex-col'>
                    <button onClick={onChangeUser} className='text-start text-sm font-light text-coral hover:underline'>(Change User)</button>
                    <span className='text-purple text-2xl capitalize font-medium'>{currentUser?.name}</span>
                    <span className='text-purple/70 text-base capitalize'>{currentUser?.program}</span>
                  </div>
                </div>
                <div className='flex justify-center gap-2 mt-2 sm:mt-0'>
                  <span className='font-light text-2xl'>Score:</span>
                  <span className='font-light text-2xl'>{currentUser?.score}</span>
                </div>
              </div>
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter your guess"
                className='bg-white px-4 py-4 outline-none border-none border-b rounded-lg'
              />
              <button
                type="submit"
                className='w-full h-fit rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white bg-gradient-to-r from-purple to-coral transition-all duration-200 transform focus:outline-none'
              >Guess</button>
            </form>
            <div className='md:col-span-4 relative flex flex-col justify-center items-center'>
              <img
                src={images[currentImage].url}
                alt="Zoomed In"
                className='rounded-xl h-full'
              />
              <div className='absolute -bottom-10 sm:-bottom-8 md:-bottom-7 flex flex-wrap justify-center gap-4 h-6 w-full p-1'>
                {
                  images.map((_, i) => (
                    <span key={i} className={`w-4 h-4 ${currentImage === i ? 'bg-olive-green' : 'bg-white'} border border-purple rounded-full`} />
                  ))
                }
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ZoomedImage;