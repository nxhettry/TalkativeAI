import React from 'react';
import LogoImage from "./LogoImage";
import Typist from 'react-typist';

const Initial = () => {
  return (
    <>
      <div className='min-h-full flex flex-col gap-4 justify-center items-center'>
        <div className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
          <LogoImage height="10rem" width="10rem" />
        </div>
        <Typist className='text-3xl font-bold text-white'>
          How can I help you today?
        </Typist>
      </div>
    </>
  )
}

export default Initial;