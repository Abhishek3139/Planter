import Lottie from 'react-lottie';
import animationData from '../../../lotties/sent - 1709784071305.json';
export const EmailSent = () => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};
