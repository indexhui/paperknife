import { useState } from 'react';

import { Grid, GridItem, Flex, Image } from '@chakra-ui/react';

import Card from '../components/Card';
import LogosAnimation from '../components/LogosAnimation';
import Heading from '../components/PaperHeading';
import Text from '../components/PaperText';

import picDiscordConnect from '../assets/images/pic_discord_connect.png';
import picWalletconnect from '../assets/images/pic_walletconnect.png';

const space = { base: '100%', md: '100%', lg: '90%', xl: '1180px' };

const SectionFeatures = () => {
  const [rotateDegree, setRotateDegree] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    setRotateDegree(() => ({
      x: (
        (Math.floor(-(event.clientY - bounds.top) + bounds.height / 2) /
          bounds.height) *
        30
      ).toFixed(2),
      y: (
        (Math.floor(event.clientX - bounds.left - bounds.width / 2) /
          bounds.width) *
        30
      ).toFixed(2),
    }));
  }

  const transform = `rotateX(${rotateDegree.x}deg) rotateY(${rotateDegree.y}deg)`;

  return (
    <Flex
      align="center"
      w="100%"
      direction="column"
      py="100px"
      px="30px"
      onMouseMove={handleMouseMove}
      style={{ perspective: '1200px' }}
    >
      <Grid
        w="100%"
        maxW={space}
        templateRows="repeat(9, 1fr)"
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
      >
        <GridItem rowSpan={2} colSpan={3} mr="50px">
          <Heading as="h2" textAlign="left">
            Let NFT be the key to unlock exclusive content
          </Heading>
        </GridItem>
        <GridItem rowSpan={8} colSpan={3} position="relative">
          <Image
            mt="12%"
            w={['150px', '150px', '150px', '240px']}
            src={picWalletconnect}
          />
          <Flex
            position="absolute"
            w="100%"
            h="100%"
            top={['8%', '20%', '20%', '20%']}
            right={['-35px', '-25px', '-5px', '-5px']}
            align="center"
            justify="center"
            style={{ perspective: '1200px' }}
          >
            <Flex align="center" justify="center" transform={transform}>
              <Image
                w={['240px', '240px', '370px', '370px']}
                h="auto"
                src={picDiscordConnect}
                objectFit="contain"
              />
            </Flex>
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3} mr={['0', '0', '40px', '50px']}>
          <Text textAlign="left" pt="20px">
            Take NFT as an identity token to check the eligibility for the
            access. Paperknife help you to provide membership, exclusive content
            or offline event pass
          </Text>
        </GridItem>

        <GridItem
          rowSpan={5}
          colSpan={3}
          mr={['0', '0', '40px', '50px']}
          pt={['40px', '20px', '0', '0']}
        >
          <Card
            description="true"
            color="grass"
            iconName="FaWallet"
            title="Connect to wallet"
          >
            By simply connecting to wallet, we will verify if the user has any
            given NFTs to get behind the gate.
          </Card>
          <Card
            description="true"
            color="brand.500"
            iconName="FaStar"
            title="Exclusive content"
          >
            For verified users, we can show them exclusive content, invite them
            join Discord and assign a special role or use as an offline event
            pass.
          </Card>
        </GridItem>
      </Grid>
      <Flex>
        <LogosAnimation />
      </Flex>
    </Flex>
  );
};

export default SectionFeatures;
