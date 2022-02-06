import { Flex } from '@chakra-ui/react';

import { motion } from 'framer-motion';

import PaperText from '../components/PaperText';
import { MainButton } from '../components/Button/MainButton';

const MotionFlex = motion(Flex);

const SectionCallToAction = () => {
  return (
    <Flex py="80px">
      <MotionFlex direction="column">
        <PaperText
          fontWeight="600"
          mb="20px"
          fontSize="16px"
          letterSpacing="1.5px"
        >
          START IT RIGHT NOW
        </PaperText>
        <MainButton outline fontWeight="700" py="24px">
          GET EARLY ACCESS
        </MainButton>
      </MotionFlex>
    </Flex>
  );
};

export default SectionCallToAction;
