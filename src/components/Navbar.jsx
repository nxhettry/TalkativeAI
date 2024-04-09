import React, { useState } from 'react';
import { Button, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from './Logo';
import Sociallinks from './Sociallinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery('(min-width:1400px)');

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <nav 
      className='flex justify-between items-center w-screen h-16 bg-gradient-to-r from-black to-gray-600 via-gray-800 text-white shadow-md px-6 absolute top-0'
    >
      <Logo />
      {matches && (
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon 
            sx={{ color: 'white', fontSize: 30 }}
          />
        </Button>
      )}
      <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)} >
        <div className='p-8 text-3xl h-full flex flex-col justify-center items-center gap-20 w-drawer bg-gradient-to-r from-black to-gray-600 via-gray-800 text-white shadow-md'>
          <div>
            Don't linger here ! <br /> <br />
            Go Back to chat 😂
          </div>
          <Sociallinks />
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;