import React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';

import theme from './theme/theme.js';

import Header from './layout/Header';
import ScrollUp from './components/ScrollUp';
import SectionHero from './layout/SectionHero';
import SectionIntroduction from './layout/SectionIntroduction';
import SectionFeatures from './layout/SectionFeatures';
import SectionCommunities from './layout/SectionCommunities';
import SectionProcess from './layout/SectionProcess';
import SectionQuestions from './layout/SectionQuestions';
import SectionCallToAction from './layout/SectionCallToAction';
import SectionLastCallToAction from './layout/SectionLastCallToAction';
import Footer from './layout/Footer';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <ScrollUp />
      <Box textAlign="center" fontSize="xl">
        <VStack
          w="100%"
          bgSize="contain"
          bgPosition="top left"
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
