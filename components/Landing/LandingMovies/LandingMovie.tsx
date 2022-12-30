import { PropsTypes } from './types';

const LandingMovie: React.FC<PropsTypes> = (props) => {
  return (
    <div className='h-screen relative'>
      <div className='bg-movies-gradient w-full h-full absolute z-[2] -mt-1' />
      <div
        className={`absolute h-full w-screen z-[1] bg-no-repeat bg-cover bg-fixed bg-center ${props.image}`}
      />

      <div className='top-[20rem] absolute flex z-[2] ml-9'>
        <h1 className='flex text-white'>
          <div className='w-4 md:w-[3.3rem] bg-white h-s mt-4 md:mt-9 mr-2 md:mr-4' />
          <div className='flex flex-col'>
            <h1
              className={`max-w-[19rem] font-bold w-full text-xl md:text-5.5 leading-8 md:leading-[4.6rem]  ${props.width}`}
            >
              “{props.quote}”
            </h1>
            <h1 className='mt-3 md:mt-4 text-base md:text-3xl text-custom-zinc-300 font-bold'>
              {props.movie}
            </h1>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default LandingMovie;
