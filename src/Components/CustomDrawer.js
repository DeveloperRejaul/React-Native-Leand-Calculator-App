import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePath from '../Constents/ImagesPath';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import NavString from '../Constents/NavavigationString';
import ShareCom from './Share';
import ColorsName from '../Constents/ColorsName.js';
import FontsName from '../Constents/FontsName.js';

export default function CustomDrawer(props) {
  const {navigation} = props;

  return (
    <View style={{flex: 1, backgroundColor: ColorsName.WHITE_02}}>
      <View style={styles.DrawerTop}>
        <View style={styles.ImgBody}>
          <Image source={ImagePath.AppIcon} style={styles.DrawerImg} />
        </View>
        <Text style={styles.DrawerTopText}> Scientific Measurer </Text>
      </View>
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <DrawerItem
          labelStyle={styles.label}
          label={'হোম'}
          onPress={() => navigation.navigate(NavString.HOME)}
          icon={() => (
            <Icon name="home-outline" color={ColorsName.BLACK} size={30} />
          )}
        />
        <DrawerItem
          labelStyle={styles.label}
          label={'একক পরির্বতক'}
          onPress={() => navigation.navigate(NavString.CALCULATOR)}
          icon={() => (
            <Icon
              name="calculator-outline"
              size={30}
              color={ColorsName.BLACK}
            />
          )}
        />
        <DrawerItem
          labelStyle={styles.label}
          label={'আমাদের সম্পর্কে'}
          onPress={() => navigation.navigate(NavString.ABOUT)}
          icon={() => (
            <Icon
              name="person-circle-outline"
              color={ColorsName.BLACK}
              size={30}
            />
          )}
        />
        <DrawerItem
          labelStyle={styles.label}
          label={'প্রাইভেসি পলিসি'}
          onPress={() => navigation.navigate(NavString.PRIVACY)}
          icon={() => (
            <Icon name="document-text" color={ColorsName.BLACK} size={30} />
          )}
        />

        <DrawerItem
          labelStyle={styles.label}
          icon={() => (
            <Icon name="settings" color={ColorsName.BLACK} size={30} />
          )}
          onPress={() => navigation.navigate(NavString.SETTINGS)}
          label={'সেটিং'}></DrawerItem>
      </DrawerContentScrollView>

      <ShareCom text={' শেয়ার করুন'} />
    </View>
  );
}

const styles = StyleSheet.create({
  FullHeight: {
    height: '100%',
  },
  DrawerTop: {
    backgroundColor: ColorsName.Blue,
    marginTop: -5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 30,
  },
  ImgBody: {
    height: 80,
    width: 80,
    marginTop: 10,
  },
  DrawerImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  DrawerTopText: {
    color: ColorsName.WHITE,
    fontSize: 25,
    fontFamily: FontsName.EN_RIGHTEOOUS_REGULAR,
  },
  ButtomText: {
    fontSize: 15,
    marginLeft: 10,
  },
  label: {
    marginLeft: -20,
    color: ColorsName.BLACK,
    fontSize: 17,
    fontFamily: FontsName.BN_NOTO_REGULAR,
  },
});
