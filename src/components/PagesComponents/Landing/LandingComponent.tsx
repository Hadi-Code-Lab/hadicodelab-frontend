import LandingImage from './LandingImage/LandingImage';
import LandingWelcome from './LandingWelcome/LandingWelcome';

const LandingComponent = () => {
  return (
    <section className='w-full h-[85vh] bg-background rounded-b-[200px]'>
      <section className='lg:container flex flex-row-reverse justify-around'>
        <LandingImage />
        <LandingWelcome />
      </section>
    </section>
  );
};

export default LandingComponent;
