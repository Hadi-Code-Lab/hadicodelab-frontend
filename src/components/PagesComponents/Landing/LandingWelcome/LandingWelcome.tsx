import Button from '@/components/Button/Button';

const LandingWelcome = () => {
  return (
    <div className='w-[44%] flex flex-col item-center justify-around'>
      <div className='w-full flex flex-col'>
        <h1 className=' text-onPrimaryContainer text-start text-6xl leading-[64px] font-extrabold'>
          WELCOME TO HADICODELAB
        </h1>
      </div>
      <div className='w-full flex flex-col'>
        <p className='w-[72%] text-justify leading-[24px]'>
          Your go-to destination for all things web development. Our mission is
          to inspire, educate, and empower developers of all levels. Explore my
          portfolio, read our blog, and join our community of coding
          enthusiasts.
        </p>
      </div>
      <div className='w-full flex flex-row gap-4'>
        <Button variant='filled' sx='px-[10%] '>
          Portfolio
        </Button>
        <Button variant='elevated' sx='px-[8%]'>
          Explore Articles
        </Button>
      </div>
    </div>
  );
};

export default LandingWelcome;
