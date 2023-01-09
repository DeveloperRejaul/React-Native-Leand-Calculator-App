import {Text, View} from 'react-native';
import React from 'react';
import BtnSwitch from '../../../Components/BtnSwitch.js';
import styles from '../SettingStyle.js';

export default function Language() {
  return (
    <View style={styles.BtnContainar}>
      <Text style={styles.BtnTitle}>থিম পরির্বতন করুন</Text>
      <BtnSwitch Btn1Text={'Default'} Btn2Text={'Dark'} Btn3Text={'Light'} />
    </View>
  );
}
