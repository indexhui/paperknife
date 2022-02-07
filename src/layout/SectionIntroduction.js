import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import Heading from '../components/PaperHeading';
import Text from '../components/PaperText';

const MotionBox = motion(Box);

const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 1, y: 20 },
};

const delayTransition = { duration: 0.75, type: 'tween', delay: '.25' };

const SectionIntroduction = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      py={['40px', '50px', '80px', '100px']}
      px={['30px', '30px', '200px', '200px']}
    >
      <Flex
        direction="column"
        maxW="1210px"
        textAlign={['left', 'left', 'center', 'center']}
      >
        <MotionBox
          px={['0', '10px', '40px', '50px']}
          mb={['40px', '40px', '30px', '30px']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 'all' }}
          variants={variants}
          transition={delayTransition}
        >
          <Heading as="h2">Provide exclusive contents with Paperknife</Heading>
        </MotionBox>

        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={variants}
          transition={delayTransition}
        >
          <Text>
            We all know NFT is far from just a transaction on chain. It
            represents people who owned the NFT share the same vision within a
            community. With Paperknife, you could easily verify and gather NFT
            owners together.
          </Text>
        </MotionBox>
      </Flex>
    </Flex>
  );
};

export default SectionIntroduction;
