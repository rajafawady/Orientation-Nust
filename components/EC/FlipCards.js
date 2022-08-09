import React from 'react'

const PresiCard = {
    "id": 1,
    "name": "Muhammad Bin Mubashir",
    "role": "President",
    "image": "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
    "one-liner": "Ye cheez!"
}

const VPcards = [
    {
        "id": 2,
        "name": "Muhammad Bin Mubashir",
        "role": "President",
        "image": "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        "one-liner": "Ye cheez!"
    },
    {
        "id": 3,
        "name": "Muhammad Bin Mubashir",
        "role": "President",
        "image": "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        "one-liner": "Ye cheez!"
    },
    {
        "id": 4,
        "name": "Muhammad Bin Mubashir",
        "role": "President",
        "image": "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        "one-liner": "Ye cheez!"
    },
    {
        "id": 5,
        "name": "Muhammad Bin Mubashir",
        "role": "President",
        "image": "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        "one-liner": "Ye cheez!"
    },
    {
        "id": 6,
        "name": "Muhammad Bin Mubashir",
        "role": "President",
        "image": "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg",
        "one-liner": "Ye cheez!"
    }
]
export default function FlipCards() {
    return (
        <>
            <div className='flex justify-center'>
                <div key={PresiCard.id} className="w-[250px] h-[400px] max-w-sm rounded overflow-hidden shadow-lg mx-4">
                        <img className="w-full h-full" src={PresiCard.image} />
                </div> 
            </div>
            <div className='flex '>
                {VPcards.map((card) => (
                    <div key={card.id} className="w-[250px] h-[400px] max-w-sm rounded overflow-hidden shadow-lg mx-4">
                        <img className="w-full h-full" src={card.image} />
                    </div>
                ))}
            </div>
        </>
    )
}
