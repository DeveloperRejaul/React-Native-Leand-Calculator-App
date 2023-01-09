import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontsName from '../Constents/FontsName.js';

export default function HeaderTitleCom({text, text2}) {
  return (
    <View style={styles.titelBox}>
      <Text style={styles.titelText}>
        {text} {text2}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titelBox: {
    backgroundColor: '#00ad7f',
    height: 40,
    width: '100%',
    marginTop: 10,
    borderColor: '#00ad7f',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  titelText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontFamily: FontsName.BN_HIND_BOLD,
  },
});
