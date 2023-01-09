import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import FontsName from '../Constents/FontsName.js';

export default function ButtonCom({text, onPress, width}) {
  return (
    <View>
      <TouchableOpacity style={{...styles.btn, width: width}}>
        <Text onPress={onPress} style={styles.btnText}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontFamily: FontsName.BN_HIND_BOLD,
  },
  btn: {
    backgroundColor: '#019267',
    borderRadius: 5,
  },
});
