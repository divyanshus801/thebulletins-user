import Lottie from 'react-lottie';
import React from "react";
import * as animationData from '../../common/lottie-loading.json';

const LottieComp = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div
    className='absolute-center'
      style={{
        flex: 1,
        zIndex: 1,
        margin: "20% 0"
      }}
    >
      <Lottie
        options={defaultOptions}
              height={250}
              width={250}
      />
    </div>
  );
};

export default LottieComp;
