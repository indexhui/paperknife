import { Flex, Text, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import PaperHeading from '../components/PaperHeading';

import { MainButton } from '../components/Button/MainButton';

import overlay from '../assets/images/overlay-3.jpg';

const space = { base: '100%', md: '100%', lg: '90%', xl: '1180px' };

const MotionBox = motion(Box);
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const bottomVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};
const delayTransition = { duration: 0.5, type: 'tween', delay: '.05' };

const SectionLastCallToAction = () => {
  return (
    <Flex
      direction="column"
      pt={['40px', '40px', '180px', '160px']}
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
          <MotionBox
            w="100%"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'all' }}
            variants={variants}
            transition={delayTransition}
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
          </MotionBox>
          <MotionBox
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 'all' }}
            variants={variants}
            transition={delayTransition}
          >
            <PaperHeading
              as="h1"
              color="black"
              textAlign="left"
              fontSize={['54px', '54px', '68px', '78px']}
            >
              NFT gate for membership and exclusive content
            </PaperHeading>
          </MotionBox>
          <Flex
            mt="30px"
            w="100%"
            direction={['column', 'column', 'row', 'row']}
            align={['flex-start', 'flex-start', 'center', 'center']}
            justify="flex-start"
          >
            <MotionBox
              my={['30px', '30px', '36px', '36px']}
              px="5px"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'all' }}
              variants={bottomVariants}
              transition={delayTransition}
            >
              <MainButton arrow="true">GET EARLY ACCESS</MainButton>
            </MotionBox>
            <MotionBox
              my="5px"
              px="5px"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 'all' }}
              variants={bottomVariants}
              transition={delayTransition}
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
