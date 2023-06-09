import Image from 'next/image';

import GithubIcon from '@/public/github.png';
import InstagramIcon from '@/public/instagram.png';
import LinkedinIcon from '@/public/linkedin.png';
import TelegramIcon from '@/public/telegram.png';

const Footer = () => {
  return (
    <footer className='h-[450px] bg-background rounded-t-[200px]'>
      <section className='lg:container pt-10 flex flex-row items-center justify-around'>
        <div className='h-full flex flex-col items-start gap-3'>
          <h4 className='text-center font-medium text-base leading-6'>
            Why HadiCodeLab was founded?
          </h4>
          <p className='w-[450px] text-justify font-normal text-sm leading-5'>
            {`Hey there, fellow coding enthusiasts! Welcome to my website, where I'm excited to share my passion for frontend and backend development with you. I founded this platform to showcase my portfolio and help others learn and grow in this amazing field.
            From crafting beautiful and intuitive user interfaces to building powerful backend architectures, I love exploring all the facets of web development. And through my blog, I'll be sharing tips, tricks, and insights that I've picked up along the way which I found some of them really hard to find through searching on the web, with the goal of making these topics more accessible and enjoyable for everyone.
            So whether you're a seasoned developer or a newbie just dipping your toes into the coding waters, I hope you'll find something here that sparks your interest and inspires you to take your skills to the next level. Thanks for stopping by, and happy coding:)`}
          </p>
          <div className='w-[450px] flex flex-row items-center justify-between'>
            <a
              className='w-[48px] h-[48px] bg-neutralBg rounded-full flex items-center justify-center shadow-sm hover:bg-primaryContainer'
              href='https://www.instagram.com/hadi_bakhshi27'
            >
              <Image
                className='w-[24px] h-[24px]'
                src={InstagramIcon}
                alt='instagram-icon'
              />
            </a>
            <a
              className='w-[48px] h-[48px] bg-neutralBg rounded-full flex items-center justify-center shadow-sm hover:bg-primaryContainer'
              href='https://t.me/haamim27'
            >
              <Image
                className='w-[24px] h-[24px]'
                src={TelegramIcon}
                alt='telegram-icon'
              />
            </a>
            <a
              className='w-[48px] h-[48px] bg-neutralBg rounded-full flex items-center justify-center shadow-sm hover:bg-primaryContainer'
              href='https://github.com/Hadi-bakhshi'
            >
              <Image
                className='w-[24px] h-[24px]'
                src={GithubIcon}
                alt='github-icon'
              />
            </a>
            <a
              className='w-[48px] h-[48px] bg-neutralBg rounded-full flex items-center justify-center shadow-sm hover:bg-primaryContainer'
              href='https://www.linkedin.com/in/hadi-bakhshi-aa203221b/'
            >
              <Image
                className='w-[24px] h-[24px]'
                src={LinkedinIcon}
                alt='linkedin-icon'
              />
            </a>
          </div>
        </div>
        <div className=''>Portfolio</div>
        <div className=''>Blog</div>
      </section>
    </footer>
  );
};

export default Footer;
