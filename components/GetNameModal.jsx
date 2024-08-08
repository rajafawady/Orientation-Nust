import React, { useState } from 'react';
import { leaderboardCollection } from '../services/firebase';
import { addDoc } from 'firebase/firestore';
import { CgClose } from 'react-icons/cg';

const GetNameModal = ({ currentUser, setCurrenUser, setOpenModal, setCurrentImage }) => {

    const [name, setName] = useState('')
    const [program, setProgram] = useState('')
    const [loading, setLoading] = useState(false)

    const onSubmit = async () => {
        try {
            setLoading(true)
            const docRef = await addDoc(leaderboardCollection, { name, program, score: 0 });
            setCurrenUser({ name, program, score: 0, id: docRef?.id })
            localStorage.setItem('user', JSON.stringify({ name, program, score: 0, id: docRef?.id }))
            setCurrentImage(0)
            setOpenModal(false)
            setLoading(false)
        } catch (e) {
            console.error('Error adding document: ', e);
            toast.error('Something went wrong!')
            setLoading(false)
        }
    };

    return (
        <div className="fixed inset-0 bg-purple bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-8 ">

                <div className="flex flex-col justify-center items-center gap-2 p-4 relative ">
                    <h2 style={{ fontSize: '36px' }} className="text-xl heading">NUST in focus</h2>
                    <p className="text-purple/70 text-center " >To continue, please fill out the following details.</p>
                    {
                        currentUser &&
                        <button className="absolute -top-2 -right-2 text-gray-500 hover:text-gray-700" onClick={() => setOpenModal(false)}>
                            <CgClose />
                        </button>
                    }
                </div>

                <div className="p-4">

                    <div className="relative w-full flex flex-col items-center justify-center gap-2 rounded-xl">
                        <div className="w-full flex flex-col gap-1 ">
                            <label htmlFor="name" className="block text-base font-medium text-purple"   >
                                Name{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ali Asghar"
                                className="w-full rounded border border-purple/70 bg-transparent px-5 py-3 font-normal text-purple outline-none transition focus:border-none active:border-none"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1 ">
                            <label htmlFor="program" className="block text-base font-medium text-purple"   >
                                Program{' '}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="program"
                                value={program}
                                onChange={(e) => setProgram(e.target.value)}
                                placeholder="Software Engineering"
                                className="w-full rounded border bg-transparent px-5 py-3 font-normal text-purple outline-none transition focus:border-none active:border-none"
                            />
                        </div>

                        <button
                            onClick={onSubmit}
                            className={`w-fit h-fit rounded-md py-3 px-12 mt-4 flex items-center justify-center text-base font-medium text-white bg-gradient-to-r from-purple to-coral ransition-all duration-200 transform focus:outline-none `}
                        >
                            {loading ? "Creating Magic..." : "Start"}
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GetNameModal;