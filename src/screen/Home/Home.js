import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  BackHandler,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useTranslation} from 'react-i18next';

import NavString from '../../Constents/NavavigationString';
import Tringle from '../../Components/TringleShaps.js';
import styles from './HomeStyle.js';
import Ellipse from '../../Components/EllipseShaps.js';
import HubCircle from '../../Components/HubCircleShaps.js';
import Circle from '../../Components/CircleShaps.js';
import SvgComponent from '../../Components/SvgBackground_Home.js';
import ColorsName from '../../Constents/ColorsName.js';
import Polygon from '../../Components/PolygonShape.js';
import ImagesPath from '../../Constents/ImagesPath.js';
import BackHandelr from '../../Leb/BackHandelr.js';

export default function Home({navigation}) {
  const {t} = useTranslation();

  const HandelActionBack = () => {
    Alert.alert('আপনি কি নিশ্চত?', 'অ্যাপটি থেকে বাহির হতে চান?', [
      {text: 'না', style: 'no', onPress: () => null},
      {text: 'হ্যা', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };
  BackHandelr(HandelActionBack);

  return (
    <View>
      <SvgComponent />
      <StatusBar backgroundColor={ColorsName.Blue} />
      <View style={styles.containar}>
        <View style={styles.Header}>
          <Icon
            name="bar-chart-2"
            size={42}
            color={ColorsName.WHITE}
            onPress={() => navigation.openDrawer()}
            style={{transform: [{rotate: '90deg'}]}}
          />
          <Text style={styles.HeaderText}>Scientific Measurer</Text>
        </View>

        <ScrollView style={styles.Scroll} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.HtitleText}>{t('TrHome:Title')}</Text>
          </View>
          <View style={styles.List}>
            {/*====== র্বগাকার জমি পরিমাপ =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.SQUARE)}
              style={styles.Box}>
              <Image source={ImagesPath.SqureIcon} />
              {/* <Squre /> */}
              <Text style={styles.BoxText}>{t('TrHome:Square')} </Text>
            </TouchableOpacity>

            {/*====== আয়তকার জমি পরিমাপ =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.RECTANGULAR)}
              style={styles.Box}>
              <View style={styles.BoxItem2}></View>
              <Text style={styles.BoxText}>{t('TrHome:Rectangular')}</Text>
              <Text style={{...styles.RText, ...styles.Btext1}}>A</Text>
              <Text style={{...styles.RText, ...styles.Btext2}}>B</Text>
              <Text style={{...styles.RText, ...styles.Btext3}}>C</Text>
              <Text style={{...styles.RText, ...styles.Btext4}}>D</Text>
            </TouchableOpacity>

            {/*====== ত্রিভূজকার জমি পরিমাপ =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.TRIANGULAR)}
              style={styles.Box}>
              <Tringle />
              <Text style={styles.BoxText}>{t('TrHome:Triangular')}</Text>
            </TouchableOpacity>

            {/*====== বৃত্তকার জমি পরিমাপ =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.CIRCULAR)}
              style={styles.Box}>
              <Circle />
              <Text style={styles.BoxText}> {t('TrHome:Round')}</Text>
            </TouchableOpacity>

            {/*====== বৃত্তাবাস জমি পরিমাপ =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.CIRCLE)}
              style={styles.Box}>
              <HubCircle />
              <Text style={styles.BoxText}>{t('TrHome:Circular')}</Text>
            </TouchableOpacity>
            {/*====== উপবৃত্তকার জমি পরিমাপ =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.ELLIPSE)}
              style={styles.Box}>
              <Ellipse />
              <Text style={styles.BoxText}> {t('TrHome:Elliptical')}</Text>
            </TouchableOpacity>
            {/*====== জমি পরিমাপের সকল সুত্র =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.POLYGON)}
              style={styles.Box}>
              <View style={styles.Polygon}>
                <Polygon />
              </View>
              <Text style={styles.PolygonText}>{t('TrHome:Polygon')}</Text>
            </TouchableOpacity>
            {/*====== জমি পরিমাপের বিভিন্ন একক =======*/}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => navigation.navigate(NavString.ALL_AKOK)}
              style={{...styles.Box, justifyContent: 'center'}}>
              <View style={styles.Akkok}>
                <Text style={styles.AkkokText}>{t('TrHome:Units')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
