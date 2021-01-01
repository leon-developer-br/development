import React from 'react';
import {Text, StyleSheet} from 'react-native';

function getRandom(min, max) {
  const randomNumber = Math.random() * (max - min) + min;
  return parseInt(randomNumber, 10);
}

export default ({min = 1, max = 5}) => (
  <Text style={style.text}>O número aleatório é [{getRandom(min, max)}]</Text>
);

const style = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
