import Image from 'next/image';

import GuyPicture from '@/public/guypicture.png';

const LandingImage = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #FEFBFF 0%, #2151DA 100%)',
      }}
      className='relative overflow-hidden ml-4 w-[364px] h-[500px] rounded-b-[200px]'
    >
      <Image className='absolute bottom-0' src={GuyPicture} alt='guy picture' />
    </div>
  );
};

export default LandingImage;
