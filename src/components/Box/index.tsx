import React from 'react';
import {Box} from 'native-base';

interface Props {
  children?: React.ReactNode;
}
const SimpleBox = (props: Props) => {
  const {children} = props;
  return (
    <Box
      bg="primary.500"
      p="2"
      width="full"
      rounded="md"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        letterSpacing: 'lg',
      }}>
      {children}
    </Box>
  );
};

export default SimpleBox;
