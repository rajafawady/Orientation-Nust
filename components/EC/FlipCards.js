import Image from 'next/image'
import React from 'react'
import styles from './FlipCard.module.css'



const VPcards = [
    {
        "id": 1,
        "name": "Muhammad Bin Mubashir",
        "role": "President",
        "image": "/EC-Pics/Mohammad bin Mubashar.webp",
        "one-liner": "Little by little, we made it.",
        "school": "SEECS",
        "batch": "2019"
    },
    {
        "id": 3,
        "name": "Zahaab Rehman",
        "role": "VP Coordinations",
        "image": "/EC-Pics/Zahaab Rehman.jpg",
        "one-liner": "Smol but Lethal",
        "school": "S3H",
        "batch": "2019"
    },
    {
        "id": 2,
        "name": "Sarim Raqeeb",
        "role": "VP Operations",
        "image": "/EC-Pics/Sarim raqeeb.jpg",
        "one-liner": "Work hard, Party harder!",
        "school": "NBS",
        "batch": "2019"
    },

    {
        "id": 4,
        "name": "Rejja Irfan",
        "role": "VP Media",
        "image": "/EC-Pics/Rejja Irfan.jpeg",
        "one-liner": "Mujhe kya main tou SADA ki hun",
        "school": "SADA",
        "batch": "2019"
    },
    {
        "id": 5,
        "name": "Hamza Saeed Rao",
        "role": "VP Resources",
        "image": "/EC-Pics/Hamza Saeed Rao.jpeg",
        "one-liner": "Follow your dreams, Keep sleeping",
        "school": "NBS",
        "batch": "2019"
    },
    {
        "id": 6,
        "name": "Fatima Azam",
        "role": "VP Outreach",
        "image": "/EC-Pics/Fatima Azam .jpg",
        "one-liner": "I know a guy who knows a guy",
        "school": "NBS",
        "batch": "2020"
    }
]
export default function FlipCards() {
    return (
        <>

            <div className='grid grid-cols-2 md:grid-cols-3 '>
                {VPcards.map((card) => (

                    <div key={card.id} className={`${styles.flipCard}  md:h-[400px] mb-12 rounded overflow-hidden shadow-xl mx-4`}>
                        <div className={styles.flipCardInner}>
                            <div className={`${styles.front} `}>
                            <Image src={card.image} layout="fill" alt={card.name} />
                            </div>
                            <div className={`${styles.back}`}>
                                <div className='flex h-full flex-col justify-center'>
                                    <div className='h-1/3 font-bold bg-tyrian-purple flex flex-col justify-center items-center'>
                                        <div className="text-md md:text-4xl text-white dark:text-white font-extrabold">
                                            {card.role}
                                        </div>


                                    </div>

                                    <div className='h-1/3 bg-tyrian-purple flex justify-center  flex-wrap px-6'>

                                        <div className="md:mt-6 text:md md:text-2xl text-white font-sans font-bold">
                                            {card['one-liner']}
                                        </div>
                                    </div>


                                    <div className='h-1/3 flex flex-col font-bold text-tyrian-purple justify-center items-center dark:bg-white'>
                                        <div className=" text-sm md:text-2xl ">
                                            {card.name}
                                        </div>

                                        <div className="text-xs md:text-lg">
                                            {card.school},  {card.batch}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
