import { motion } from 'framer-motion';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaWallet, FaStar } from 'react-icons/fa';

const MotionFlex = motion(Flex);
const variants = {
  visible: { opacity: 1, scale: 1, y: 0 },
  hidden: { opacity: 0, scale: 1, y: 20 },
};
const delayTransition = { duration: 0.5, type: 'tween', delay: '.05' };

const Card = props => {
  const cardColor = props.color || 'white';
  const description = props.description || false;
  return (
    <MotionFlex
      w="100%"
      rounded="xl"
      bgGradient="linear(to-b, #0C1828, #13161A00 )"
      direction={['column', 'column', 'row']}
      align={['flex-start', 'flex-start', 'center']}
      pb="30px"
      pt="40px"
      px={['40px', '40px', '50px', '50px']}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'all' }}
      variants={variants}
      transition={delayTransition}
    >
      <Flex mr="24px" mb={['20px', '10px', '10px', '0']}>
        {props.iconName === 'FaWallet' && (
          <Icon w={12} h={12} as={FaWallet} color={cardColor} />
        )}
        {props.iconName === 'FaStar' && (
          <Icon w={12} h={12} as={FaStar} color={cardColor} />
        )}
      </Flex>
      <Flex direction="column" textAlign="left">
        <Text fontSize="22px" fontWeight="700" color={cardColor}>
          {props.title}
        </Text>
        {description && (
          <Text
            pt="10px"
            lineHeight="1.3em"
            fontSize="15px"
            color="rgb(170,170,170)"
            fontFamily="Montserrat"
          >
            {props.children}
          </Text>
        )}
      </Flex>
    </MotionFlex>
  );
};

export default Card;
