import { useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Box,
  Icon,
  Text,
  Image,
} from '@chakra-ui/react';

import { FaCaretRight, FaCaretUp } from 'react-icons/fa';

import PaperHeading from '../components/PaperHeading';
import PaperText from '../components/PaperText';

import picUsermainpage from '../assets/images/pic_usermainpage.png';

import dots from '../assets/images/Dots-blue.svg';

const space = {
  base: '100%',
  md: '100%',
  lg: '100%',
  xl: '1180px',
  '2xl': '1180px',
};

const questionLists = [
  {
    title: 'What tokens do we support now',
    answer:
      'We support ERC721 and ERC1155 now, will support ERC20 and Solana NFT in a near feature',
  },
  {
    title: 'What do I need to when setup page',
    answer:
      'You only need to put the contract address, and we will check if users has related NFT or token in their wallet',
  },
  {
    title: 'How to use as offline event pass',
    answer:
      'By now, you can check if user can get behind the gate and see the private page. To bring it further, we will allow page owner configure event detail and auto generate a event pass once we verify user’s NFT ownership.',
  },
];

const SectionQuestions = () => {
  const [rotateDegree, setRotateDegree] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    setRotateDegree(() => ({
      x: (
        (Math.floor(-(event.clientY - bounds.top) + bounds.height / 2) /
          bounds.height) *
        60
      ).toFixed(2),
      y: (
        (Math.floor(event.clientX - bounds.left - bounds.width / 2) /
          bounds.width) *
        40
      ).toFixed(2),
    }));
  }

  const transform = `rotateX(${rotateDegree.x}deg) rotateY(${rotateDegree.y}deg)`;

  return (
    <Flex
      py="100px"
      px="30px"
      w="100%"
      position="relative"
      justify="center"
      onMouseMove={handleMouseMove}
      bgGradient="radial(at center right,#186DD180 0%, #00000000 58% )"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgImage={`url('${dots}')`}
        bgPosition="top right"
        bgRepeat="no-repeat"
      ></Box>
      <Flex w={space} wrap="wrap">
        <Flex w="100%">
          <PaperHeading as="h2" pb="20px">
            Questions
          </PaperHeading>
        </Flex>
        <Flex w={{ base: '100%', lg: '50%' }} pt="60px" pb="30px">
          <Accordion defaultIndex={[0]} allowMultiple w="100%">
            {questionLists.map((question, index) => (
              <AccordionItem
                key={question.title}
                borderTop="0px solid black"
                borderBottom="1px solid rgba(255,255,255,.1)"
              >
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        p="10px"
                        _focus={{
                          boxShadow: 'none',
                        }}
                      >
                        {isExpanded ? (
                          <Icon w={4} h={4} as={FaCaretUp} color="white" />
                        ) : (
                          <Icon w={4} h={4} as={FaCaretRight} color="white" />
                        )}
                        <Text
                          flex="1"
                          textAlign="left"
                          fontFamily="'DM Sans',Sans-serif"
                          fontSize="18px"
                          fontWeight="600"
                          color="white"
                          pl="20px"
                        >
                          {question.title}
                        </Text>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <PaperText
                        textAlign="left"
                        fontSize="16px"
                        pt="10px"
                        pl="36px"
                        pr="15px"
                        pb="10px"
                      >
                        {question.answer}
                      </PaperText>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
        <Flex
          w={{ base: '100%', lg: '50%' }}
          justify="center"
          style={{ perspective: '1200px' }}
        >
          <Image
            transform={transform}
            w={['320px', '320px', '370px', '65%']}
            h="auto"
            src={picUsermainpage}
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionQuestions;
