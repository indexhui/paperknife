import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export const SmallButton = props => {
  return (
    <MotionButton
      color="white"
      rounded="full"
      whileHover={{
        y: '-10px',
        transition: { duration: 0.1, type: 'tween' },
      }}
      bgGradient="linear(260deg, #3DB9FF  38%, #186DD1  100%)"
      _hover={{ bgGradient: 'linear(260deg, #186DD1 0%, #3DB9FF 56%)' }}
      _active={{ bgGradient: 'linear(260deg, #186DD1 0%, #3DB9FF 56%)' }}
    >
      Get Early Access
    </MotionButton>
  );
};
