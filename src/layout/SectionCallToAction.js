import { Flex, Box } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import PaperText from '../components/PaperText';
import { MainButton } from '../components/Button/MainButton';

const MotionBox = motion(Box);
const topVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};
const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 22 },
};
const delayTransition = { duration: 0.5, type: 'tween', delay: '.05' };

const SectionCallToAction = () => {
  return (
    <Flex pt={{ base: '10px', lg: '50px' }} pb={{ base: '40px', lg: '80px' }}>
      <Flex direction="column">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'all' }}
          variants={topVariants}
          transition={delayTransition}
        >
          <PaperText
            fontWeight="600"
            mb="20px"
            fontSize="16px"
            letterSpacing="1.5px"
          >
            START IT RIGHT NOW
          </PaperText>
        </MotionBox>
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'all' }}
          variants={variants}
          transition={delayTransition}
        >
          <MainButton outline fontWeight="700" py="24px">
            GET EARLY ACCESS
          </MainButton>
        </MotionBox>
      </Flex>
    </Flex>
  );
};

export default SectionCallToAction;
