import Image from 'next/image'
import React from 'react'
import styles from './ECCard.module.css'



const VPcards = [
    {
        "id": 1,
        "name": "Fazail Haider",
        "role": "President",
        "image": "/EC-Pics/fazail.png",
        "one-liner": "Little by little, we made it.",
        "school": "SEECS",
        "batch": "2019"
    },
    {
        "id": 3,
        "name": "Aun Abbas",
        "role": "VP Coordinations",
        "image": "/EC-Pics/aun.png",
        "one-liner": "Smol but Lethal",
        "school": "S3H",
        "batch": "2019"
    },
    {
        "id": 2,
        "name": "Naurang Jahan ",
        "role": "VP Operations",
        "image": "/EC-Pics/naurang.png",
        "one-liner": "Work hard, Party harder!",
        "school": "NBS",
        "batch": "2019"
    },

    {
        "id": 4,
        "name": "Saman Malik",
        "role": "VP Media",
        "image": "/EC-Pics/saman.png",
        "one-liner": "Mujhe kya main tou SADA ki hun",
        "school": "SADA",
        "batch": "2019"
    },
    {
        "id": 5,
        "name": "Umer Ishtiaq",
        "role": "VP Resources",
        "image": "/EC-Pics/umer.png",
        "one-liner": "Follow your dreams, Keep sleeping",
        "school": "NBS",
        "batch": "2019"
    },
    {
        "id": 6,
        "name": "Fizza Ayub",
        "role": "VP Outreach",
        "image": "/EC-Pics/fizza.png",
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
                  <img src={card.image} alt={card.name} className={styles.image} />

                    <div className={styles.imageContainer}>
                    
                    </div>

                    
                    
                    
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
