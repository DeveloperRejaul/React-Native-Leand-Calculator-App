import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import ColorsName from '../Constents/ColorsName.js';

export default function Switch({ON, OFF}) {
  return (
    <View style={styles.SwitchBody}>
      <View style={{...styles.SwitchInner, left: OFF, right: ON}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  SwitchInner: {
    backgroundColor: ColorsName.Blue,
    width: '65%',
    height: '100%',
    borderRadius: 20,
    position: 'absolute',
  },
  SwitchBody: {
    width: 60,
    height: 35,
    borderRadius: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: 'red',
    position: 'relative',
  },
});
