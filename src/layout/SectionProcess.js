import { Flex, Icon, Divider } from '@chakra-ui/react';
import Heading from '../components/PaperHeading';
import Text from '../components/PaperText';
import { FaLink, FaPen, FaUserAlt, FaLaugh } from 'react-icons/fa';

import dots from '../assets/images/Dots-blue.svg';

const space = { base: '100%', md: '100%', lg: '90%', xl: '1180px' };

const steps = [
  {
    icon: FaLink,
    content: 'Connect to wallet',
  },
  {
    icon: FaPen,
    content: 'Setup Page Link',
  },
  {
    icon: FaUserAlt,
    content: 'Put exclusive contents or setup privilege for other members',
  },
  {
    icon: FaLaugh,
    content: 'Publish',
  },
];

const SectionProcess = () => {
  return (
    <Flex
      w="100%"
      py="50px"
      px="30px"
      justify="center"
      bgImage={`url('${dots}')`}
      bgRepeat="repeat-x"
      bgSize="auto"
      bgPosition="top right"
    >
      <Flex
        w={space}
        align="center"
        justify="center"
        direction="column"
        py="80px"
        px="30px"
        rounded="xl"
        bgGradient="linear(to-b, #0C1828, #13161A47  )"
      >
        <Heading as="h2" pb="20px">
          How it works
        </Heading>
        <Text>
          From upload to share, you can easily build up a website with NFT gate.
        </Text>
        <Flex w="100%" pt="80px" direction={['column', 'column', 'row', 'row']}>
          {steps.map((step, index) => (
            <Flex
              key={step.content}
              flex="1"
              px="32px"
              pt={['40px', '40px', '0px', '0px']}
              direction="column"
              align="flex-start"
              borderTop={
                index !== 0 && [
                  '1px dashed rgba(255,255,255,0.2) ',
                  '1px dashed rgba(255,255,255,0.2)',
                  '0px',
                  '0px',
                ]
              }
              borderLeft={
                index !== 0 && [
                  '0 ',
                  '0',
                  '1px dashed rgba(255,255,255,0.2)',
                  '1px dashed rgba(255,255,255,0.2)',
                ]
              }
              // borderStyle="dashed"
              // borderColor="red"
              // borderColor={index !== 0 ? 'rgba(255,255,255,0.3)' : 'red'}
            >
              <Flex
                border="4px"
                style={{ borderWidth: '3px' }}
                borderColor="brand.500"
                p="18px"
                rounded="full"
              >
                <Icon w={8} h={8} as={step.icon} color="brand.500" />
              </Flex>
              <Text py="12px">Step {index + 1}.</Text>
              <Heading as="h3" pb="20px">
                {step.content}
              </Heading>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionProcess;
