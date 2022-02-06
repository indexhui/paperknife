import { useState, useEffect } from 'react';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { FiChevronUp } from 'react-icons/fi';

const ScrollUp = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  if (scrollPosition < 200) {
    return null;
  }
  return (
    <Button
      zIndex="4"
      position="fixed"
      bottom="20px"
      right="20px"
      w="50px"
      h="50px"
      bg="black"
      opacity=".5"
      onClick={scrollToTop}
      _hover={{
        opacity: 1,
        bg: 'black',
      }}
      _focus={{
        outline: 'none',
      }}
    >
      <Flex align="center" justify="center" rounded="md">
        <Icon as={FiChevronUp} w="28px" h="28px" />
      </Flex>
    </Button>
  );
};

export default ScrollUp;
