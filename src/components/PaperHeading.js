import { Heading } from '@chakra-ui/react';

const PaperHeading = props => {
  const { as } = props;
  const Heading1size = { base: '42px', md: '42px', lg: '68px', xl: '78px' };
  const Heading2size = { base: '32px', md: '46px', lg: '50px', xl: '50px' };
  const Heading3size = { base: '22px', md: '22px', lg: '22px', xl: '22px' };
  if (as === 'h1') {
    return (
      <Heading {...props} fontSize={Heading1size}>
        {props.children}
      </Heading>
    );
  }
  if (as === 'h2') {
    return (
      <Heading
        as="h2"
        fontSize={Heading2size}
        fontWeight="800"
        lineHeight={['1.2em', '1.2em', '1', '1']}
        {...props}
      >
        {props.children}
      </Heading>
    );
  }
  if (as === 'h3') {
    return (
      <Heading
        as="h3"
        fontSize={Heading3size}
        fontWeight="800"
        lineHeight={['1.2em', '1.2em', '1', '1']}
        textAlign="left"
        {...props}
      >
        {props.children}
      </Heading>
    );
  }
  return <Heading {...props}>{props.children}</Heading>;
};
export default PaperHeading;
