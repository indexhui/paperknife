import { useState, useEffect } from 'react';

import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { SmallButton } from '../components/Button';

import logo from '../assets/images/paperknife_logo_w.png';

const MotionFlex = motion(Flex);

const space = {
  base: '100%',
  md: '100%',
  lg: '100%',
  xl: '1180px',
  '2xl': '1180px',
};

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    if (window.pageYOffset === 0) {
      window.scroll({
        top: 5,
        behavior: 'smooth',
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (scrollPosition !== 0) {
    return (
      <MotionFlex
        px="30px"
        w="100%"
        h="80px"
        position="fixed"
        top="0"
        backdropFilter="blur(0px)"
        zIndex="4"
        bg="#070707BF"
        align="center"
        justify="center"
        animate={{ y: 0, opacity: 1, backdropFilter: 'blur(5px)' }}
        transition={{ duration: 0.5, type: 'tween' }}
        style={{
          y: '-65px',
          opacity: 0.1,
        }}
      >
        <Flex w={space} justify="space-between" align="center">
          <Image src={logo} h="50px" />
          <SmallButton />
        </Flex>
      </MotionFlex>
    );
  }
  return null;
};

export default Header;
