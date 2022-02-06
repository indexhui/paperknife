import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import theme from './theme/theme.js';

import Header from './layout/Header';
import SectionHero from './layout/SectionHero';
import SectionIntroduction from './layout/SectionIntroduction';
import SectionFeatures from './layout/SectionFeatures';
import SectionCommunities from './layout/SectionCommunities';
import SectionProcess from './layout/SectionProcess';
import SectionQuestions from './layout/SectionQuestions';
import SectionCallToAction from './layout/SectionCallToAction';
import SectionLastCallToAction from './layout/SectionLastCallToAction';
import Footer from './layout/Footer';

import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Box textAlign="center" fontSize="xl">
        <VStack
          // spacing={8}
          w="100%"
          bgSize="contain"
          bgPosition="top left"
          // bg="red"
          bgGradient="radial(at top left, #186DD180 0%, #3DB9FF00 46% )"
        >
          <VStack w="100%">
            <SectionHero />
            <SectionIntroduction />
            <SectionFeatures />
            <SectionCommunities />
            <SectionProcess />
          </VStack>
        </VStack>
        <VStack>
          <SectionCallToAction />
          <SectionQuestions />
          <SectionLastCallToAction />
        </VStack>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
