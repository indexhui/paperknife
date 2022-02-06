import { useState } from 'react';
import { Flex, HStack, Text, Box, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import PaperHeading from '../components/PaperHeading';

import { MainButton } from '../components/Button/MainButton';
import Hover3DTransform from '../components/Hover3DTransform';
import dots from '../assets/images/Dots-blue.svg';
import paperKnife from '../assets/images/pic_center_paperknife.png';

const space = { base: '100%', md: '100%', lg: '90%', xl: '1180px' };

const MotionBox = motion(Box);

const SectionHero = () => {
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });
  const [dotRotation, setDotRotation] = useState({ x: 0, y: 0 });
  // const [counter, setCounter] = useState(0);

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    // setCounter(counter => counter + 1);
    setDotRotation({
      x: (
        (Math.floor(event.clientX - bounds.left - bounds.width / 2) /
          bounds.width) *
        200
      ).toFixed(2),
      y: (
        (Math.floor(-(event.clientY - bounds.top) + bounds.height / 2) /
          bounds.width) *
        200
      ).toFixed(2),
    });
    setRelativePosition({
      x: (
        (Math.floor(event.clientX - bounds.left - bounds.width / 2) /
          bounds.width) *
        80
      ).toFixed(2),
      y: (
        (Math.floor(-(event.clientY - bounds.top) + bounds.height / 2) /
          bounds.width) *
        60
      ).toFixed(2),
    });
  }
  const transform = `translateX(${dotRotation.x}px) translateY(${dotRotation.y}px)`;
  const transformPhone = `rotateX(${relativePosition.y + 1}deg) rotateY(${
    relativePosition.x + 8
  }deg)`;

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
      onMouseMove={handleMouseMove}
      style={{ perspective: '1200px' }}
      overflow="hidden"
    >
      <Box
        top="0"
        position="absolute"
        w="100%"
        h="100%"
        zIndex="-1"
        transform={['', '', transform, transform]}
        transition="transform 0.5s"
        bgImage={`url('${dots}')`}
        bgRepeat="repeat-x"
        bgSize="auto"
        bgPosition="top center"
      ></Box>
      <Flex w={space} align="center">
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
              color="brand.500"
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
            <PaperHeading
              as="h1"
              textAlign={['center', 'center', 'left', 'left']}
            >
              NFT gate for membership and exclusive content
            </PaperHeading>
          </motion.div>
          <Image
            my="28px"
            w="200px"
            display={['block', 'block', 'none', 'none']}
            src={paperKnife}
          />
          <Flex direction={['column', 'column', 'row', 'row']} align="center">
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
              <MainButton outline>GET EARLY ACCESS</MainButton>
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
              <MainButton bg="white" bgImage="" outline>
                SEE EXAMPLE
              </MainButton>
            </MotionBox>
          </Flex>
        </Flex>
        <Flex
          w="40%"
          ml="50px"
          display={['none', 'none', 'block', 'block']}
          justify="center"
          align="center"
          style={{ perspective: '1200px' }}
          transform="rotate(3deg) "
        >
          {/* <Hover3DTransform /> */}
          <Flex w="70%" transform={transformPhone}>
            <Image src={paperKnife} maxW="100%" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionHero;
