import { useState } from 'react';

import { Flex, Box, Text } from '@chakra-ui/react';

import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hover3DTransform = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [clientPosition, setClientPosition] = useState({ x: 0, y: 0 });
  const [relativePosition, setRelativePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(x, [-100, 100], [-20, 20]);
  const rotateY = useTransform(y, [-100, 100], [-20, 20]);

  function handleMouseMove(event) {
    // setMousePosition({ x: event.pageX, y: event.pageY });
    // setClientPosition({ x: Math.floor(event.clientX), y: event.clientY });
    const bounds = event.currentTarget.getBoundingClientRect();

    setCounter(counter => counter + 1);

    if (counter % 3 === 0) {
      setRelativePosition({
        x: (
          Math.floor(event.clientX - bounds.left - bounds.width / 2) /
          bounds.width
        ).toFixed(2),
        y: (
          Math.floor(-(event.clientY - bounds.top) + bounds.height / 2) /
          bounds.width
        ).toFixed(2),
      });
    }
    // (mousePosition.x / bounds.width / 2).toFixed(2);

    // x.set(-Math.floor(-(event.clientY - bounds.top) + bounds.height / 2) * 2);
    // y.set(Math.floor(event.clientX - bounds.left - bounds.width / 2) * 2);
  }

  const transform = `rotateX(${relativePosition.y}deg) rotateY(${relativePosition.x}deg)`;

  return (
    <Flex
      transition={0.5}
      style={{ perspective: '28px' }}
      align="center"
      justify="center"
    >
      <Flex
        w="300px"
        h="300px"
        bg="gray.100"
        align="center"
        justify="center"
        border="gray"
        borderWidth="2px"
        transition="transform 0.5s"
        shadow="lg"
        transform={transform}
        onMouseMove={handleMouseMove}
      >
        {relativePosition.x}
        {relativePosition.y}
        {/* <motion.div
        transition={{ delay: 0.2 }}
        style={{
          background: 'gray',
          width: '50%',
          height: '50%',
          transform: 'perspective(600px)',
          perspective: '600px',
          // x: x,
          // y: y,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
      </motion.div> */}
      </Flex>
    </Flex>
  );
};

export default Hover3DTransform;
