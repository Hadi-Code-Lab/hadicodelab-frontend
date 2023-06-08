import { DocumentTextIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const HomeTopArticles = () => {
  return (
    <section className='my-16 w-full flex flex-col items-center justify-center'>
      <div className='bg-primaryContainer w-[879px] h-[600px] rounded-2xl p-3 relative'>
        <div className='w-full flex flex-row items-center justify-between'>
          <h2 className='text-2xl font-normal leading-7'>
            Top Articles of the week
          </h2>
          <Link
            className='text-sm font-medium leading-5 text-primary_20'
            href='/blog'
          >
            Explore More
          </Link>
        </div>
        <DocumentTextIcon className='w-[200px] h-[200px] absolute bottom-0 left-0 text-[#0f172a23]' />
      </div>
    </section>
  );
};

export default HomeTopArticles;
