import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ColorsName from '../Constents/ColorsName.js';

export default function Tringle() {
  return (
    <View style={styles.container}>
      <View style={styles.triangleCorner} />

      <Text style={{...styles.text, ...styles.textA}}>A</Text>
      <Text style={{...styles.text, ...styles.textB}}>B</Text>
      <Text style={{...styles.text, ...styles.textC}}>C</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 70,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: 'red',
    transform: [{rotate: '30deg'}],
    marginTop: 20,
  },
  container: {
    position: 'relative',
    height: '45%',
    width: '50%',
  },

  text: {
    color: ColorsName.Blue,
    fontSize: 18,
    position: 'absolute',
    fontWeight: 'bold',
  },
  textA: {
    bottom: '-25%',
    left: 35,
    transform: [{rotate: '-20deg'}],
  },
  textB: {
    bottom: 30,
    left: -12,
    transform: [{rotate: '20deg'}],
  },
  textC: {
    top: 0,
    left: 50,
    transform: [{rotate: '40deg'}],
  },
});
