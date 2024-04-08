import React from 'react';
import LogoImage from "./LogoImage";

function Logo() {
  return (
    <div className='flex justify-start items-center gap-4'>
      <LogoImage />
      <h2 className='text-white font-body text-2xl font-bold'>TalkativeAI</h2>
    </div>
  )
}

export default Logo;
