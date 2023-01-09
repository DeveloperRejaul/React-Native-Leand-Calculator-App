import {View, Text} from 'react-native';
import React, {useCallback} from 'react';

import ColorsName from '../../Constents/ColorsName.js';
import HeaderCom from '../../Components/HeaderCom.js';
import BackHandelr from '../../Leb/BackHandelr.js';
import Language from './Language/Language.js';
import styles from './SettingStyle.js';
// import Thimes from './Thimes/Thimes.js';

export default function Settings({navigation}) {
  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );

  return (
    <View style={{flex: 1, backgroundColor: ColorsName.WHITE}}>
      <HeaderCom text={'সেটিং'} GoBack={() => navigation.goBack()} />

      <View style={styles.MainBody}>
        {/* Languige Section */}
        <Language />

        {/* Thime Section */}
        {/* <Thimes /> */}
      </View>
    </View>
  );
}
