import {View, ScrollView, LayoutAnimation} from 'react-native';
import React, {useState, useCallback} from 'react';

import ModalCom from '../../../Components/ModalCom.js';
import HeaderCom from '../../../Components/HeaderCom.js';
import ImagesPath from '../../../Constents/ImagesPath.js';
import StateData from '../../../Constents/StateData.js';
import HendelAleart from '../../../Leb/HendelAleart.js';
import HeaderTitleCom from '../../../Components/HeaderTitleCom.js';
import TextCom from '../../../Components/TextCom.js';
import TextInputCom from '../../../Components/TextInputCom.js';
import ButtonCom from '../../../Components/ButtonCom.js';
import TableCom from '../../../Components/TableCom.js';
import StyleCom from '../../../Components/StyleCom.js';
import BackHandelr from '../../../Leb/BackHandelr.js';

export default function Triangular({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text_1, setText_1] = useState(null);
  const [text_2, setText_2] = useState(null);
  const [text_3, setText_3] = useState(null);
  const [tableData, setTableData] = useState(StateData.tableData);
  const [tableData_2, setTableData_2] = useState(StateData.tableData_2);

  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );
  // Heldel All Inpute value State
  const HendelInput_1 = value => {
    if (value.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }

    setText_1(value);
  };
  const HendelInput_2 = value => {
    if (value.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }

    setText_2(value);
  };
  const HendelInput_3 = value => {
    if (value.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }
    setText_3(value);
  };

  // Create Clear State
  const ClearInput = () => {
    setText_1(null),
      setText_2(null),
      setText_3(null),
      setTableData(StateData.tableData),
      setTableData_2(StateData.tableData_2);
  };

  // Result For Table
  const Result = (text_1, text_2, text_3) => {
    if ((text_1, text_2, text_3)) {
      let s = (text_1 + text_2 + text_3) / 2;
      let surt = s * ((s - text_1) * (s - text_2) * (s - text_3));

      if (surt > 0) {
        let Square_Feet = Math.sqrt(surt);
        let Century = (Square_Feet / 435.6).toFixed(3);
        let Katha = (Square_Feet / 720).toFixed(3);
        let Acre = (Square_Feet / 43560).toFixed(3);
        let Bigha = (Katha / 20).toFixed(3);
        let Gunda = (Square_Feet / 864).toFixed(3);
        let Kani = (Square_Feet / 17280).toFixed(3);
        let Hector = (Square_Feet / 107639).toFixed(3);

        //  For Chitagong
        let Hura = (Square_Feet / 144).toFixed(3);
        let Hani = (Hura / 120).toFixed(3);

        setTableData([
          [`${Square_Feet} র্বগ ফুট `],
          [`${Century} শতক `],
          [`${Katha} কাঠা`],
          [`${Acre} একর`],
          [`${Bigha} বিঘা`],
          [`${Gunda} গন্ডা `],
          [`${Kani} কানি `],
          [`${Hector} হেক্টর`],
        ]),
          setTableData_2([[`${Hura}  হরা`], [`${Hani} হানি `]]);
      } else {
        HendelAleart('দয়া করে সঠিক ইনফুট দিন');
      }
    } else {
      HendelAleart('দয়া করে ইনফুট দিন');
    }
  };

  // Handel Modell
  const HandelModalVisible = modalVisible => {
    LayoutAnimation.easeInEaseOut();
    setModalVisible(modalVisible);
  };

  return (
    <View style={StyleCom.Body}>
      <HeaderCom
        text={'ত্রিভূজকার'}
        IconName={'eye'}
        GoBack={() => navigation.goBack()}
        ShowModel={() => HandelModalVisible(!modalVisible)}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitleCom text="ত্রিভূজকার জমির সীমানা মাপুন।" />
        {modalVisible && (
          <ModalCom
            imagesur={ImagesPath.Trianguler_1}
            imagesur_2={ImagesPath.Trianguler_2}
          />
        )}
        <View style={StyleCom.InputBody}>
          <TextCom text={'জমির ৩টি সীমানা (ফূট)'} />
          <TextInputCom
            placeholderText={'ক সীমানা (ফূট)'}
            value={text_1}
            onChangeText={HendelInput_1}
          />
          <TextInputCom
            placeholderText={'খ সীমানা (ফূট)'}
            value={text_2}
            onChangeText={HendelInput_2}
          />
          <TextInputCom
            placeholderText={'গ সীমানা (ফূট)'}
            value={text_3}
            onChangeText={HendelInput_3}
          />
        </View>

        <View style={StyleCom.RowAline}>
          <ButtonCom text={'রিসেট করুন'} onPress={ClearInput} />
          <ButtonCom
            text={'ফলাফল দেখুন'}
            onPress={() => Result(+text_1, +text_2, +text_3)}
          />
        </View>
        <TableCom tableData={tableData} tableData_2={tableData_2} />
      </ScrollView>
    </View>
  );
}
