import React from 'react';

import {NativeBaseProvider, Column, ScrollView} from 'native-base';
import Header from './src/components/Header';
import SimpleBox from './src/components/Box';

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <ScrollView>
        <Column space="sm" p="2">
          <SimpleBox>text</SimpleBox>
          <SimpleBox>text</SimpleBox>
          <SimpleBox>text</SimpleBox>
          <SimpleBox>text</SimpleBox>
        </Column>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
