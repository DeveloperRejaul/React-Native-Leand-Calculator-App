import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import React, {useState, useCallback} from 'react';
import HeaderCom from '../../Components/HeaderCom';
import ImagePath from '../../Constents/ImagesPath.js';
import ColorsName from '../../Constents/ColorsName.js';
import FontsName from '../../Constents/FontsName.js';
import LanguigeString from '../../Constents/LanguigeString.js';
import BackHandelr from '../../Leb/BackHandelr.js';

export default function About({navigation}) {
  const [Languige, setLanguige] = useState(false);

  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );

  return (
    <View style={{backgroundColor: ColorsName.WHITE_03, flex: 1}}>
      <HeaderCom
        text={'About'}
        GoBack={() => navigation.goBack()}
        button={Languige ? 'Bangla' : 'English'}
        style={styles.btn}
        onPress={() => setLanguige(!Languige)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Body}>
          <View style={styles.imgbody}>
            <Image
              source={ImagePath.AppIcon}
              style={{height: 100, width: 100, borderRadius: 10}}
            />
            <Text style={styles.AppName}>Scientific Measurer</Text>
          </View>
          {Languige ? (
            <View>
              <Text style={[styles.about, styles.EnLanguige, , styles.title]}>
                {LanguigeString.en.about.title}
              </Text>
              <Text style={[styles.about, styles.EnLanguige]}>
                {LanguigeString.en.about.text}
              </Text>
            </View>
          ) : (
            <View>
              <Text style={[styles.about, styles.bnLanguige, styles.title]}>
                {LanguigeString.bd.about.title}
              </Text>
              <Text style={[styles.about, styles.bnLanguige]}>
                {LanguigeString.bd.about.text}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  imgbody: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  AppName: {
    fontSize: 30,
    fontFamily: FontsName.EN_RIGHTEOOUS_REGULAR,
  },
  btn: {
    color: ColorsName.WHITE,
    fontSize: 20,
    borderWidth: 1,
    borderColor: ColorsName.WHITE,
    width: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 30,
    borderRadius: 5,
  },
  about: {
    fontSize: 20,
    textAlign: 'justify',
    color: ColorsName.BLACK,
  },
  EnLanguige: {
    fontFamily: FontsName.EN_ROBOTO_REGULAR,
  },
  bnLanguige: {
    fontFamily: FontsName.BN_NOTO_REGULAR,
  },
  title: {
    fontSize: 25,
  },
});
