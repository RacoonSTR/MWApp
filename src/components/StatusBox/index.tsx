import {Box, Center, Column, Container, Flex, Text} from 'native-base';
import React from 'react';

const StatusBox = () => {
  return (
    <Box bg="primary.500" p="2" width="full" rounded="md">
      <Flex direction="row" alignItems="center" justifyContent="space-around">
        <Container>
          <Column>
            <StatusValue value={999} />
          </Column>
        </Container>
        <Container>
          <Center>
            <Text>text 1</Text>
            <Text>text 2</Text>
          </Center>
        </Container>
      </Flex>
    </Box>
  );
};

interface StatusValueProps {
  value: Number;
}

const StatusValue = ({value}: StatusValueProps) => {
  return (
    <Center py={5}>
      <Text fontSize={'2xl'} fontWeight={'medium'} color={'warmGray.50'}>
        Wallet
      </Text>
      <Text fontSize={'3xl'} fontWeight={'medium'} color={'warmGray.50'}>
        {value}
      </Text>
    </Center>
  );
};

export default StatusBox;
