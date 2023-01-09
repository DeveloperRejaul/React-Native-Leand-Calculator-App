import {View, ScrollView, LayoutAnimation} from 'react-native';
import React, {useState, useCallback} from 'react';

import HeaderCom from '../../../Components/HeaderCom.js';
import ModalCom from '../../../Components/ModalCom.js';
import StateData from '../../../Constents/StateData.js';
import NumConv from '../../../Leb/NumberConvaretor.js';
import HendelAleart from '../../../Leb/HendelAleart.js';
import ButtonCom from '../../../Components/ButtonCom.js';
import HeaderTitleCom from '../../../Components/HeaderTitleCom.js';
import TableCom from '../../../Components/TableCom.js';
import TextInputCom from '../../../Components/TextInputCom.js';
import TextCom from '../../../Components/TextCom.js';
import StyleCom from '../../../Components/StyleCom.js';
import BackHandelr from '../../../Leb/BackHandelr.js';

function Squre({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState(null);
  const [tableData, setTableData] = useState(StateData.tableData);
  const [tableData_2, setTableData_2] = useState(StateData.tableData_2);

  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );
  // Handel Modell
  const HandelModalVisible = modalVisible => {
    LayoutAnimation.easeInEaseOut();
    setModalVisible(modalVisible);
  };

  const HandelChange = text => {
    if (text.length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }
    setText(text);
  };

  const ClearInput = () => {
    setText(null);
    setTableData(StateData.tableData);
    setTableData_2(StateData.tableData_2);
  };

  const Result = text => {
    if (text) {
      let Square_Feet = NumConv(Math.pow(text, 2));
      let Century = NumConv(Square_Feet / 435.6);
      let Katha = NumConv(Square_Feet / 720);
      let Acre = NumConv(Square_Feet / 43560);
      let Bigha = NumConv(Katha / 20);
      let Gunda = NumConv(Square_Feet / 864);
      let Kani = NumConv(Square_Feet / 17280);
      let Hector = NumConv(Square_Feet / 107639);

      //  For Chitagong
      Hura = NumConv(Square_Feet / 144);
      Hani = NumConv(Hura / 120);

      // Showing Result Here

      setTableData([
        [`${Square_Feet} র্বগ ফুট `],
        [`${Century} শতক `],
        [`${Katha} কাঠা`],
        [`${Acre} একর`],
        [`${Bigha} বিঘা`],
        [`${Gunda} গন্ডা `],
        [`${Kani} কানি `],
        [`${Hector} হেক্টর`],
      ]);
      setTableData_2([[`${Hura}  হরা`], [`${Hani} হানি `]]);
    } else {
      HendelAleart('দয়া করে ইনফুট দিন');
    }
  };
  return (
    <View style={StyleCom.Body}>
      <HeaderCom
        text={'র্বগকার'}
        IconName={'eye'}
        GoBack={() => navigation.goBack()}
        ShowModel={() => HandelModalVisible(!modalVisible)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={StyleCom.scrollWidth}>
        <HeaderTitleCom text="র্বগকার জমির সীমানা মাপুন।" />
        {modalVisible && (
          <ModalCom text={'Area = Side × Side '} text_2={'Area = A × A'} />
        )}
        <TextCom text="জমির যেকোন একটি সীমানার (ফূট)" />
        <TextInputCom
          onChangeText={HandelChange}
          value={text}
          placeholderText={'জমির যেকোন একটি সীমানার (ফূট)'}
        />
        <View style={StyleCom.RowAline}>
          <ButtonCom text="রিসেট করুন " onPress={ClearInput} />
          <ButtonCom text="ফলাফল দেখুন " onPress={() => Result(+text)} />
        </View>
        <TableCom tableData={tableData} tableData_2={tableData_2} />
      </ScrollView>
    </View>
  );
}
export default Squre;
