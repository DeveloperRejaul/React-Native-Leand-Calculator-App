import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorsName from '../Constents/ColorsName.js';
import Dimantion from '../Constents/Dimantion.js';

import FontsName from '../Constents/FontsName.js';
export default function HeaderCom({
  text,
  GoBack,
  IconName,
  ShowModel,
  props,
  button,
  style,
  onPress,
}) {
  return (
    <View style={styles.HeaderStyle}>
      <View style={{flexDirection: 'row'}}>
        {GoBack && (
          <Icon name="arrow-back" size={30} color="#fff" onPress={GoBack} />
        )}
        <Text style={styles.HeaderTitle}>{text}</Text>
      </View>

      <View>
        {IconName && (
          <Icon name={IconName} size={30} color="#fff" onPress={ShowModel} />
        )}
        {button && (
          <Pressable>
            <Text onPress={onPress} style={style}>
              {button}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 55,
    width: Dimantion.WindowWidth,
    flexDirection: 'row',
    backgroundColor: ColorsName.Blue,
    justifyContent: 'space-between',
  },
  HeaderTitle: {
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 20,
    color: ColorsName.WHITE,
    fontFamily: FontsName.BN_ANEK_BOLD,
  },
});
