import { useState } from 'react';
import { Flex, HStack, Text, Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import PaperHeading from '../components/PaperHeading';

import { MainButton } from '../components/Button/MainButton';
import Hover3DTransform from '../components/Hover3DTransform';
import dots from '../assets/images/Dots-blue.svg';
import paperKnife from '../assets/images/pic_center_paperknife.png';

import overlay from '../assets/images/overlay-3.jpg';

const space = { base: '100%', md: '100%', lg: '90%', xl: '1180px' };

const MotionBox = motion(Box);

const SectionLastCallToAction = () => {
  return (
    <Flex
      direction="column"
      pt={['80px', '100px', '180px', '160px']}
      pb={['40px', '60px', '80px', '100px']}
      px="30px"
      position="relative"
      w="100%"
      border="5px sold blue"
      align="center"
      overflow="hidden"
      bgGradient="linear(to-br,brand.600 36%, brand.500 100% )"
    >
      <Box
        top="0"
        position="absolute"
        w="100%"
        h="100%"
        left="0"
        zIndex="1"
        transition="transform 0.5s"
        bgImage={`url('${overlay}')`}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgPosition="center"
        opacity=".23"
      ></Box>
      <Flex w={space} align="flex-start" zIndex="2">
        <Flex
          w={{ base: '100%', lg: '60%' }}
          direction="column"
          align={{ base: 'center', lg: 'flex-start' }}
          py="10px"
        >
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, type: 'tween' }}
            style={{
              y: '-18px',
              opacity: 0.1,
            }}
          >
            <Text
              color="black"
              fontWeight="bold"
              fontSize="16px"
              letterSpacing="1.5px"
              textAlign="left"
              mb="20px"
            >
              SAAS FOR NFT OWNERSHIP VERIFICATION
            </Text>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, type: 'tween' }}
            style={{
              opacity: 0.1,
            }}
          >
            <PaperHeading as="h1" color="black" textAlign="left">
              NFT gate for membership and exclusive content
            </PaperHeading>
          </motion.div>
          <Flex
            w="100%"
            direction={['column', 'column', 'row', 'row']}
            align={['flex-start', 'flex-start', 'center', 'center']}
            justify="flex-start"
          >
            <MotionBox
              my={['5px', '5px', '36px', '36px']}
              px="5px"
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: 'tween' }}
              style={{
                y: '20px',
                opacity: 0.1,
              }}
            >
              <MainButton arrow="true">GET EARLY ACCESS</MainButton>
            </MotionBox>
            <MotionBox
              my="5px"
              px="5px"
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, type: 'tween' }}
              style={{
                y: '20px',
                opacity: 0.1,
              }}
            >
              <MainButton discord="true" bg="white" bgImage="">
                JOIN OUR DISCORD
              </MainButton>
            </MotionBox>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionLastCallToAction;
