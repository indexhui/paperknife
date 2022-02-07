import { Text, GridItem } from '@chakra-ui/react';

const Content = props => {
  return (
    <GridItem
      display="flex"
      px="16px"
      py="20px"
      w="100%"
      rounded="xl"
      alignItems={['flex-start', 'flex-start', 'center', 'center']}
      flexDirection={['column', 'column', 'row', 'row']}
      justify="center"
      bgGradient="linear(to-l, #0C1828, #3DB9FF45  )"
      {...props}
    >
      {props.icon}
      <Text
        color="white"
        pl={['0px', '0px', '12px', '12px']}
        pt={['28px', '28px', '0px', '0px']}
        flex="1"
        fontSize={['18px', '18px', '22px', '22px']}
        fontWeight="bold"
        lineHeight="1.3em"
        textAlign="left"
      >
        {props.title}
      </Text>
    </GridItem>
  );
};

export default Content;
