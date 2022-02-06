import { Flex, Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import metaMask from '../assets/images/metaMask.png';
import infinity from '../assets/images/Infinity_official_logo_icon.svg';
import trust from '../assets/images/trust_platform.svg';
import crypto from '../assets/images/crypto-com.svg';
import automic from '../assets/images/Automic.svg';
import coinomi from '../assets/images/coinomi.svg';
import kleer from '../assets/images/kleer.svg';
import argent from '../assets/images/logo_argent.svg';

const MotionBox = motion(Box);

const MotionImage = motion(Image);

const content = [
  {
    alt: 'metamask',
    src: metaMask,
  },
  {
    alt: 'infinity',
    src: infinity,
  },
  {
    alt: 'trust',
    src: trust,
  },
  {
    alt: 'crypto',
    src: crypto,
  },
  {
    alt: 'automic',
    src: automic,
  },
  {
    alt: 'coinomi',
    src: coinomi,
  },
  {
    alt: 'kleer',
    src: kleer,
  },
  {
    alt: 'argent',
    src: argent,
  },
];

const variants = {
  visible: custom => ({
    opacity: 0.5,
    y: 0,
    transition: { delay: custom * 0.25 },
  }),
  hidden: { opacity: 0, scale: 1, y: 20 },
};

const LogosAnimation = () => {
  return (
    <Flex
      w={['100%', '90%', '800px', '880px']}
      justify="space-between"
      align="center"
      py="40px"
      wrap="wrap"
    >
      {content.map((item, index) => (
        <Flex
          w={['50%', '50%', 'auto', 'auto']}
          key={item.alt}
          justify="center"
          py="20px"
        >
          <MotionImage
            src={item.src}
            alt={item.alt}
            // key={item.alt}
            custom={index % 4}
            w="60px"
            h="60px"
            objectFit="contain"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 'all' }}
            variants={variants}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default LogosAnimation;
