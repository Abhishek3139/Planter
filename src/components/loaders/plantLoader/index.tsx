import Lottie from 'react-lottie';
import animationData from '../../../lotties/Animation - 1709781795489.json';
export const PlantLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};
