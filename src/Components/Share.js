import {StyleSheet, Text, View, Share, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorsName from '../Constents/ColorsName.js';
import FontsName from '../Constents/FontsName.js';

export default function ShareCom({text}) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <View style={styles.DrawerButtom}>
        <TouchableOpacity onPress={onShare} style={styles.ButtonBtn}>
          <View style={styles.RowAline}>
            <Icon name="share-social" color={ColorsName.BLACK} size={30} />
            <Text style={styles.ButtomText}> {text} </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DrawerButtom: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: ColorsName.WHITE_05,
    backgroundColor: ColorsName.WHITE_02,
  },
  ButtonBtn: {
    paddingVertical: 15,
  },
  RowAline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtomText: {
    color: ColorsName.BLACK,
    fontSize: 17,
    fontFamily: FontsName.BN_NOTO_REGULAR,
  },
});
