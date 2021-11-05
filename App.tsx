import React from 'react';

import {NativeBaseProvider, Column, ScrollView} from 'native-base';
import Header from './src/components/Header';
import StatusBox from './src/components/StatusBox';

const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <ScrollView>
        <Column space="sm" p="2">
          <StatusBox />
        </Column>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
