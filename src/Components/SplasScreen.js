import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React from 'react';
import ColorsName from '../Constents/ColorsName.js';
import ImagesPath from '../Constents/ImagesPath.js';
import FontsName from '../Constents/FontsName.js';
import NavavigationString from '../Constents/NavavigationString.js';
import {
  Icon2,
  Icon3,
  Icon6,
  Icon11,
  Icon9,
} from '../Components/Svg/SvgIndex.js';

export default function SplasScreen({navigation}) {
  setTimeout(() => {
    navigation.replace(NavavigationString.HOME);
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={ColorsName.Blue} />
      <View style={styles.InnerContainer}>
        <View style={styles.RowAline}>
          <View style={[styles.IconBody, styles.BoxShadow]}>
            <Image source={ImagesPath.AppIcon} style={styles.IconImage} />
          </View>

          <Text style={[styles.IconText, styles.textShadow]}>
            Earth Measurer
          </Text>
        </View>

        <View style={styles.Buttom}>
          <Text style={styles.text}>Developed By</Text>
          <Text style={[styles.textTitle, styles.textShadow]}>Getsells</Text>
        </View>
      </View>
      <Icon6 bottom={40} left={'10%'} size="50" opacity={0.4} />
      <Icon2 bottom={40} right={'10%'} size="50" opacity={0.4} />
      <Icon3 bottom={40} left={'34%'} size="50" opacity={0.4} />
      <Icon9 bottom={40} right={'30%'} size="50" opacity={0.4} />
      <Icon11 bottom={'30%'} right={'20%'} size="250" opacity={0.1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: ColorsName.Blue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InnerContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '65%',
  },
  textTitle: {
    fontSize: 35,
    color: ColorsName.WHITE_02,
    fontFamily: FontsName.EN_RIGHTEOOUS_REGULAR,
  },
  text: {
    fontSize: 15,
    color: ColorsName.WHITE,
    fontWeight: '600',
  },
  IconImage: {
    height: 70,
    width: 70,
    borderRadius: 15,
    shadowColor: '#000',
  },
  RowAline: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Buttom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconText: {
    color: ColorsName.WHITE,
    fontSize: 33,
    marginLeft: 10,
    fontFamily: FontsName.EN_RIGHTEOOUS_REGULAR,
  },
  textShadow: {
    shadowColor: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  BoxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  IconBody: {
    height: 70,
    width: 70,
    backgroundColor: 'red',
    borderRadius: 15,
  },
});
