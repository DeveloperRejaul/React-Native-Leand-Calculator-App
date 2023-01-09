import {StyleSheet, Text} from 'react-native';
import React from 'react';
import FontsName from '../Constents/FontsName.js';
import ColorsName from '../Constents/ColorsName.js';

export default function TextCom({text}) {
  return <Text style={styles.InputTop}>{text}</Text>;
}

const styles = StyleSheet.create({
  InputTop: {
    color: ColorsName.BorderActive,
    fontSize: 18,
    fontFamily: FontsName.BN_NOTO_REGULAR,
    textAlign: 'center',
    marginTop: 10,
  },
});
