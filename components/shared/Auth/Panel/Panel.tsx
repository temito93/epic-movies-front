import { Button, Close, Home, Movie, usePanel } from 'components';
import Image from 'next/image';
import Link from 'next/link';

const Panel = () => {
  const { name, image, asPath, avatarLoader, panelCloseHandler } = usePanel();
  return (
    <>
      <div
        className='fixed top-0 left-0 w-full h-screen z-[1] bg-blur-bg backdrop-blur-sm md:hidden'
        onClick={panelCloseHandler}
      />
      <div className='sticky h-screen w-full md:w-max z-[2] md:mr-32'>
        <div className='bg-panel-color md:bg-transparent max-w-[24rem] md:w-max h-full w-screen rounded-tr-xl rounded-br-xl pt-10 md:pt-8'>
          <div className='pl-11 md:pl-0'>
            <div
              className='absolute right-5 top-5 cursor-pointer  md:hidden'
              onClick={panelCloseHandler}
            >
              <Close />
            </div>
            <Link href=''>
              <div className='flex items-center hover:opacity-80'>
                <div>
                  {image && (
                    <Image
                      src={image}
                      className='rounded-full'
                      alt='user image'
                      width={40}
                      height={40}
                      loader={avatarLoader}
                      unoptimized={true}
                    />
                  )}
                </div>
                <div className='ml-5'>
                  <h2 className='text-xl font-normal text-white'>{name}</h2>
                  <p className='text-custom-gray-300 text-sm'>
                    Edit your profile
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href=''
              className='text-xl font-normal text-white mt-10 flex items-center'
            >
              <Home fill={asPath === '/news-feed' ? '#E31221' : '#fff'} />
              <p className='ml-8 hover:text-custom-red-700'>News feed</p>
            </Link>
            <Link
              href='/movie-list'
              className='text-xl font-normal text-white flex mt-10 items-center'
            >
              <Movie fill={asPath === '/movie-list' ? '#E31221' : '#fff'} />
              <p className='ml-8 hover:text-custom-red-700'>List of movies</p>
            </Link>
          </div>
          <div className='text-center mt-10 md:hidden'>
            <Button className='w-24 border h-[2.4rem] rounded hover:bg-white hover:text-black'>
              <div className='flex items-center justify-center'>Log out</div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
