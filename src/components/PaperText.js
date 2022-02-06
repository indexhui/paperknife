import { Text } from '@chakra-ui/react';

const fontSize = { base: '18px', md: '18px', lg: '18px', xl: '18px' };

const PaperText = props => {
  return (
    <Text
      color="#aaa"
      fontSize={fontSize}
      lineHeight="1.4em"
      letterSpacing="0px"
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default PaperText;
