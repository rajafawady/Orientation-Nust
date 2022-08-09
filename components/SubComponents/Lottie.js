import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/34533-business-team';

export const Team= () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
}