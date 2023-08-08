import Image from 'next/image'
import React from 'react'
import styles from './ECCard.module.css'



const VPcards = [
    {
        "id": 1,
        "name": "Muhammad Bin Mubashir",
        "role": "President",
        "image": "/EC-Pics/test.png",
        "one-liner": "Little by little, we made it.",
        "school": "SEECS",
        "batch": "2019"
    },
    {
        "id": 3,
        "name": "Zahaab Rehman",
        "role": "VP Coordinations",
        "image": "/EC-Pics/test.png",
        "one-liner": "Smol but Lethal",
        "school": "S3H",
        "batch": "2019"
    },
    {
        "id": 2,
        "name": "Sarim Raqeeb",
        "role": "VP Operations",
        "image": "/EC-Pics/test.png",
        "one-liner": "Work hard, Party harder!",
        "school": "NBS",
        "batch": "2019"
    },

    {
        "id": 4,
        "name": "Rejja Irfan",
        "role": "VP Media",
        "image": "/EC-Pics/test.png",
        "one-liner": "Mujhe kya main tou SADA ki hun",
        "school": "SADA",
        "batch": "2019"
    },
    {
        "id": 5,
        "name": "Hamza Saeed Rao",
        "role": "VP Resources",
        "image": "/EC-Pics/test.png",
        "one-liner": "Follow your dreams, Keep sleeping",
        "school": "NBS",
        "batch": "2019"
    },
    {
        "id": 6,
        "name": "Fatima Azam",
        "role": "VP Outreach",
        "image": "/EC-Pics/test.png",
        "one-liner": "I know a guy who knows a guy",
        "school": "NBS",
        "batch": "2020"
    }
]

  
    
    const ECCards = () => {
      return (
        
            <div className={styles.teamCard}>
              <div className={styles.grid}>
                {VPcards.map((card) => (
                  <div key={card.id} className={styles.card}>
                    <div className={styles.imageContainer}>
                    
                    </div>
                    <img src={card.image} alt={card.name} className={styles.image} />
                    
                    <div className={styles.textContainer}>
                      <p className={styles.name}>{card.name}</p>
                      <p className={styles.role}>{card.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        };
  
    export default ECCards;
