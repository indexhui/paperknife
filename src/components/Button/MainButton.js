import { Button, Box, Icon } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { RiDiscordFill } from 'react-icons/ri';

export const MainButton = props => {
  if (props.outline) {
    return (
      <Box
        rounded="full"
        borderWidth="8px"
        borderColor="#186DD14A"
        _hover={{ borderColor: '#186DD185' }}
      >
        <Button
          rightIcon={<Icon as={FaArrowRight} />}
          rounded="full"
          px="32px"
          boxSizing="border-box"
          fontSize="15px"
          lineHeight="1"
          letterSpacing="1"
          fontWeight="800"
          py={['22px', '20px', '24px', '28px']}
          bgGradient="linear(260deg, #186DD1 0%, #3DB9FF 56%)"
          _hover={{ bgGradient: 'linear(260deg, #3DB9FF  38%, #186DD1  100%)' }}
          color="black"
          _focus={{
            outline: 'none',
          }}
          _active={{
            bgGradient: 'linear(260deg, #3DB9FF  38%, #186DD1  100%)',
          }}
          {...props}
        >
          {props.children}
        </Button>
      </Box>
    );
  }
  if (props.arrow) {
    return (
      <Button
        boxSizing="border-box"
        rightIcon={<Icon as={FaArrowRight} />}
        rounded="full"
        px="32px"
        py="30px"
        color="white"
        fontSize="15px"
        fontWeight="800"
        letterSpacing="1px"
        bgGradient="linear(260deg, brand.600 0%, brand.700 100%)"
        _hover={{
          bgGradient: 'linear(260deg, brand.700  0%, brand.600  100%)',
        }}
        _active={{
          bgGradient: 'linear(260deg, brand.700  0%, brand.600  100%)',
        }}
        {...props}
      >
        {props.children}
      </Button>
    );
  }
  if (props.discord) {
    return (
      <Button
        boxSizing="border-box"
        leftIcon={<Icon as={RiDiscordFill} />}
        rounded="full"
        px="32px"
        py="26px"
        color="black"
        fontSize="15px"
        fontWeight="800"
        border="4px solid black"
        letterSpacing="1px"
        _hover={{ bg: 'black', color: 'white' }}
        _active={{ bg: 'black', color: 'white' }}
        {...props}
      >
        {props.children}
      </Button>
    );
  }
  return (
    <Button
      rounded="full"
      px="32px"
      py="26px"
      bgGradient="linear(260deg, #186DD1 0%, #3DB9FF 56%)"
      _hover={{ bgGradient: 'linear(260deg, #3DB9FF  38%, #186DD1  100%)' }}
      _active={{ bgGradient: 'linear(260deg, #3DB9FF  38%, #186DD1  100%)' }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
