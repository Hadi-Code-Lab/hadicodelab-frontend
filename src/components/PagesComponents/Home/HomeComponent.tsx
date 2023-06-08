import HomeImage from './HomeImage/HomeImage';
import HomeWelcome from './HomeWelcome/HoameWelcome';

const HomeComponent = () => {
  return (
    <section className='w-full h-[85vh] bg-background rounded-b-[200px]'>
      <section className='lg:container '>
        <div className='flex flex-row-reverse justify-center gap-[7%]'>
          <HomeImage />
          <HomeWelcome />
        </div>
      </section>
    </section>
  );
};

export default HomeComponent;
