import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='h-8 w-screen flex justify-center items-center text-center py-4 bg-gray-800 text-white'>
      <p>© {year} @ Nxhettry. All rights reserved.</p>
    </div>
  )
}

export default Footer;