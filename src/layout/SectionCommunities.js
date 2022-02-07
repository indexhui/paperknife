import { useState } from 'react';

import { Grid, GridItem, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import ContentGroup from '../components/ContentGroup';
import Heading from '../components/PaperHeading';
import Text from '../components/PaperText';

import picDiscordConnect from '../assets/images/pic_connect-wallet-1911x1080.png';
import picWalletconnect from '../assets/images/pic_userwallet.png';

const MotionGridItem = motion(GridItem);
const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 1, y: 20 },
};
const delayTransition = { duration: 0.5, type: 'tween', delay: '.05' };

const space = { base: '100%', md: '100%', lg: '90%', xl: '1180px' };

const SectionCommunities = () => {
  const [rotateDegree, setRotateDegree] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    setRotateDegree(() => ({
      x: (
        (Math.floor(-(event.clientY - bounds.top) + bounds.height / 2) /
          bounds.height) *
        30
      ).toFixed(2),
      y: (
        (Math.floor(event.clientX - bounds.left - bounds.width / 2) /
          bounds.width) *
        30
      ).toFixed(2),
    }));
  }

  const transform = `rotateX(${rotateDegree.x}deg) rotateY(${rotateDegree.y}deg)`;

  return (
    <Flex
      align="center"
      w="100%"
      direction="column"
      py="100px"
      px="30px"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1200px' }}
    >
      <Grid
        w="100%"
        maxW={space}
        templateRows="repeat(7, 1fr)"
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
      >
        <MotionGridItem
          rowSpan={2}
          colSpan={3}
          colStart={['auto', 'auto', '4', '4']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'all' }}
          variants={variants}
          transition={delayTransition}
        >
          <Heading as="h2" textAlign="left">
            Different Tokens, different communities!
          </Heading>
        </MotionGridItem>
        <GridItem
          rowSpan={7}
          colSpan={3}
          colStart={['auto', 'auto', '1', '1']}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            mt="2%"
            w={['50%', '50%', '150px', '280px']}
            src={picWalletconnect}
          />
          <Flex
            position="absolute"
            w="100%"
            h="100%"
            top={['0%', '0%', '0%', '0%']}
            left={['0', '0', '-5px', '-5px']}
            align="center"
            justify="center"
            style={{ perspective: '1200px' }}
          >
            <Flex align="center" justify="center" transform={transform}>
              <Image
                w={['360px', '360px', '370px', '540px']}
                h="auto"
                src={picDiscordConnect}
                objectFit="contain"
              />
            </Flex>
          </Flex>
        </GridItem>
        <MotionGridItem
          rowSpan={1}
          colSpan={3}
          mr={['0', '0', '0', '0']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'all' }}
          variants={variants}
          transition={delayTransition}
        >
          <Text textAlign="left" pt="20px">
            We help member bring communities together in different ways.
          </Text>
        </MotionGridItem>

        <GridItem
          rowSpan={4}
          colSpan={3}
          mr={['0', '0', '40px', '50px']}
          pt={['40px', '20px', '0', '0']}
        >
          <ContentGroup />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default SectionCommunities;
