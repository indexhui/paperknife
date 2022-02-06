import { motion } from 'framer-motion';
import { Flex, Grid, Icon } from '@chakra-ui/react';
import Content from '../components/Content';
import {
  FaPalette,
  FaCamera,
  FaPenFancy,
  FaLock,
  FaInfinity,
} from 'react-icons/fa';

const MotionGrid = motion(Grid);
const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 1, y: 20 },
};
const delayTransition = { duration: 0.5, type: 'tween', delay: '.05' };

const ContentGroup = () => {
  return (
    <MotionGrid
      templateColumns="repeat(2,1fr)"
      gap={4}
      wrap="wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'all' }}
      variants={variants}
      transition={delayTransition}
    >
      <Content
        colSpan={1}
        w="100%"
        title="Arts"
        icon={<Icon w={6} h={6} as={FaPalette} color="brand.500" />}
      />
      <Content
        w="100%"
        title="Videos"
        icon={<Icon w={6} h={6} as={FaCamera} color="brand.500" />}
      />
      <Content
        w="100%"
        title="Words"
        icon={<Icon w={6} h={6} as={FaPenFancy} color="brand.500" />}
      />
      <Content
        w="100%"
        title="Physical spaces"
        icon={<Icon w={6} h={6} as={FaLock} color="brand.500" />}
      />
      <Content
        colSpan={[2, 2, 1, 1]}
        w="100%"
        title="Offline events"
        icon={<Icon w={6} h={6} as={FaInfinity} color="brand.500" />}
      />
    </MotionGrid>
  );
};

export default ContentGroup;
