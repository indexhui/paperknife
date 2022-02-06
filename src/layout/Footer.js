import { Flex, Box, IconButton, Icon } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import Text from '../components/PaperText';

const space = { base: '100%', md: '100%', lg: '90%', xl: '1180px' };

const Footer = () => {
  return (
    <footer>
      <Flex
        w="100%"
        bg="black"
        py="40px"
        px="30px"
        borderTop="1px solid white"
        justify="center"
      >
        <Flex
          w={space}
          justify="space-between"
          align={{ base: 'flex-start', lg: 'center' }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Text
            fontFamily="'DM Sans',Sans-serif"
            pb={{ base: '12px', lg: '0' }}
          >
            Copyright © 2021 PAPERKNIFE
          </Text>
          <IconButton
            colorScheme="gray"
            color="white"
            bg="gray.800"
            aria-label="twitter"
            size="sm"
            icon={<Icon as={FaTwitter} />}
          />
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
