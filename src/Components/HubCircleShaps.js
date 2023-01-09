import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ColorsName from '../Constents/ColorsName.js';

export default function Circle() {
  return (
    <View style={styles.container}>
      <View style={styles.oval}>
        <View style={styles.line} />
      </View>
      <View style={styles.ovalCrop} />
      <Text style={{...styles.text, ...styles.textA}}>A</Text>
      <Text style={{...styles.text, ...styles.textB}}>B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  oval: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'red',
    transform: [{scaleX: 2}],
    position: 'relative',
  },
  container: {
    position: 'relative',
    height: '50%',
    width: '50%',
    top: 20,
    left: 5,
  },

  text: {
    color: ColorsName.Blue,
    fontSize: 18,
    position: 'absolute',
    fontWeight: 'bold',
  },
  textA: {
    bottom: 30,
    left: -30,
    transform: [{rotate: '0deg'}],
  },
  textB: {
    top: -25,
    left: 30,
    transform: [{rotate: '-5deg'}],
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: ColorsName.COLOR2,
    position: 'absolute',
    left: '50%',
  },
  ovalCrop: {
    position: 'absolute',
    backgroundColor: ColorsName.WHITE,
    height: '50%',
    width: '200%',
    left: '-46%',
    bottom: '0%',
  },
});
