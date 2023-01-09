import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ColorsName from '../Constents/ColorsName.js';

export default function Circle() {
  return (
    <>
      <View style={styles.BoxCircle}>
        <View style={styles.Line} />
        <Text style={styles.Text}> A </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  BoxCircle: {
    position: 'relative',
    width: '45%',
    height: '45%',
    backgroundColor: ColorsName.RED,
    borderRadius: 50,
  },
  Line: {
    backgroundColor: ColorsName.COLOR2,
    width: 2,
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left: '50%',
  },
  Text: {
    color: ColorsName.Blue,
    fontSize: 18,
    position: 'absolute',
    bottom: '50%',
    left: '50%',
  },
});
