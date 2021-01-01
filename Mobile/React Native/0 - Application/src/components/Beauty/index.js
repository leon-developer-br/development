import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default () => (
  <View style={style.app}>
    <Text style={style.text}> Beauty </Text>
  </View>
);

const style = StyleSheet.create({
  app: {
    backgroundColor: '#A00',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
