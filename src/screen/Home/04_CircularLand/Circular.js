import {View, ScrollView, Alert, LayoutAnimation} from 'react-native';
import React, {useState, useCallback} from 'react';

import HeaderCom from '../../../Components/HeaderCom.js';
import ModalCom from '../../../Components/ModalCom.js';
import ImagesPath from '../../../Constents/ImagesPath.js';
import StateData from '../../../Constents/StateData.js';
import HendelAleart from '../../../Leb/HendelAleart.js';
import HeaderTitleCom from '../../../Components/HeaderTitleCom.js';
import StyleCom from '../../../Components/StyleCom.js';
import TextCom from '../../../Components/TextCom.js';
import TextInputCom from '../../../Components/TextInputCom.js';
import ButtonCom from '../../../Components/ButtonCom.js';
import TableCom from '../../../Components/TableCom.js';
import BackHandelr from '../../../Leb/BackHandelr.js';

export default function Circular({navigation}) {
  const [text_1, setText_1] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [tableData, setTableData] = useState(StateData.tableData);
  const [tableData_2, setTableData_2] = useState(StateData.tableData_2);

  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );

  // Handel input
  const HendelInput_1 = value => {
    if (value.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }
    setText_1(value);
  };

  // Handel Clear btn
  const ClearInput = () => {
    setText_1(null);
    setTableData(StateData.tableData);
    setTableData_2(StateData.tableData_2);
  };

  // Handel Result btn
  const Result = text_1 => {
    if (text_1) {
      let r = Math.PI;
      let pow = Math.pow(text_1, 2);

      let Square_Feet = r * pow;
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
      Alert.alert('দয়া করে ইনফুট দিন');
    }
  };

  // Handel Model
  const HandelModalVisible = modalVisible => {
    LayoutAnimation.easeInEaseOut();
    setModalVisible(modalVisible);
  };

  return (
    <View style={StyleCom.Body}>
      <HeaderCom
        text="বৃত্তকার"
        IconName={'eye'}
        GoBack={() => navigation.goBack()}
        ShowModel={() => HandelModalVisible(!modalVisible)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitleCom text={'বৃত্তকার জমির সীমানা মাপুন।'} />
        {modalVisible && <ModalCom imagesur={ImagesPath.Circular} />}
        <View style={StyleCom.InputBody}>
          <TextCom text={'জমির সীমানার (ফূট)'} />
          <TextInputCom
            placeholderText={'ক সীমানা (ফূট)'}
            value={text_1}
            onChangeText={HendelInput_1}
          />
        </View>

        <View style={StyleCom.RowAline}>
          <ButtonCom text={'রিসেট করুন'} onPress={ClearInput} />
          <ButtonCom text={'ফলাফল দেখুন'} onPress={() => Result(+text_1)} />
        </View>
        <View>
          <TableCom tableData={tableData} tableData_2={tableData_2} />
        </View>
      </ScrollView>
    </View>
  );
}
