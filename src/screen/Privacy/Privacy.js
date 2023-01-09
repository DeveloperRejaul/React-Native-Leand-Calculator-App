import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import HeaderCom from '../../Components/HeaderCom.js';
import ColorsName from '../../Constents/ColorsName.js';
import Dimantion from '../../Constents/Dimantion.js';

export default function Privacy({navigation}) {
  const {t} = useTranslation();
  const data = [
    {
      left: ` ${t('TableData:LeftData')}`,
      right: null,
    },
    {
      left: ` ${t('TableData:LeftData2')}`,
      right: null,
    },
    {
      left: ` ${t('TableData:LeftData2')}`,
      right: null,
    },
    {
      left: ` ${t('TableData:LeftData2')}`,
      right: null,
    },
    {
      left: ` ${t('TableData:LeftData2')}`,
      right: null,
    },
    {
      left: ` ${t('TableData:LeftData2')}`,
      right: null,
    },
    {
      left: ` ${t('TableData:LeftData2')}`,
      right: null,
    },
  ];

  return (
    <View>
      <HeaderCom text={'প্রাইভেসি পলিসি'} GoBack={() => navigation.goBack()} />
      <View style={{marginHorizontal: 10, marginTop: 10}}>
        {/* Table start*/}
        <View style={styles.Table}>
          {/*Table Header start */}
          <View style={[styles.Header]}>
            <Text> Result of Leand </Text>
          </View>
          {/*Table Header End */}

          {/* Table Body Start */}
          {data.map(data => (
            <View style={[styles.Body]}>
              <View style={[styles.Items]}>
                <Text>{data.left}</Text>
              </View>
              <View>
                <Text>{data.right}</Text>
              </View>
            </View>
          ))}
          {/* Table Body End */}
        </View>
        {/* Table End*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Table: {
    width: Dimantion.WindowWidth - 20,
  },
  Header: {
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 1,
    borderTopColor: ColorsName.Blue,
    borderLeftColor: ColorsName.Blue,
    borderRightColor: ColorsName.Blue,
    borderBottomColor: ColorsName.Blue,
  },
  Body: {
    flexDirection: 'row',
    borderLeftColor: ColorsName.Blue,
    borderRightColor: ColorsName.Blue,
    borderBottomColor: ColorsName.Blue,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Items: {
    borderRightWidth: 1,
    borderRightColor: ColorsName.Blue,
  },
});
