import React from 'react';
import { StatusBar } from 'react-native';

import Home from '../src/pages/Home/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#793398" />
      <Home />
    </>
  );
};

export default App;
