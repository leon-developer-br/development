import React from 'react';
import {View, StyleSheet} from 'react-native';
import Random from './components/Random';

function App() {
  return (
    <View style={style.app}>
      <Random min={3} max={20} />
      <Random min={3} max={20} />
      <Random min={3} max={20} />
      <Random min={3} max={20} />
    </View>
  );
}

export default App;

const style = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
