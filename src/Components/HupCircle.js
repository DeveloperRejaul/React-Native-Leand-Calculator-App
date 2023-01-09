import {View, ScrollView, LayoutAnimation} from 'react-native';
import React, {useState} from 'react';

import ImagesPath from '../Constents/ImagesPath.js';
import StateData from '../Constents/StateData.js';
import HendelAleart from '../Leb/HendelAleart.js';
import HeaderTitleCom from './HeaderTitleCom.js';
import StyleCom from './StyleCom.js';
import TextCom from './TextCom.js';
import Dimantion from '../Constents/Dimantion.js';
import TextInputCom from './TextInputCom.js';
import ButtonCom from './ButtonCom.js';
import TableCom from './TableCom.js';
import HeaderCom from './HeaderCom.js';
import ModalCom from './ModalCom.js';

export default function Circle({HeaderText, HeaderTitle, goback}) {
  const [text_1, setText_1] = useState(null);
  const [text_2, setText_2] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [tableData, setTableData] = useState(StateData.tableData);
  const [tableData_2, setTableData_2] = useState(StateData.tableData_2);

  // Handel Inpute
  const HendelInput_1 = value => {
    value.toString().length >= 12 &&
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    setText_1(value);
  };
  const HendelInput_2 = value => {
    value.toString().length >= 12 &&
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    setText_2(value);
  };

  // Heandel Clear button
  const ClearInput = () => {
    setText_1(null),
      setText_2(null),
      setTableData(StateData.tableData),
      setTableData_2(StateData.tableData_2);
  };
  // Result For Table
  const Result = (text_1, text_2) => {
    if ((text_1, text_2)) {
      let Square_Feet = (((text_1 * text_2) / 4) * Math.PI).toFixed(6);
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
        [`${Hector} হেক্টর`],
        [`${Bigha} বিঘা`],
        [`${Kani} কানি `],
        [`${Gunda} গন্ডা `],
      ]),
        setTableData_2([[`${Hura}  হরা`], [`${Hani} হানি `]]);
    } else {
      HendelAleart('দয়া করে ইনফুট দিন');
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
        text={HeaderText}
        IconName={'eye'}
        GoBack={goback}
        ShowModel={() => HandelModalVisible(!modalVisible)}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderTitleCom text={HeaderTitle} text2={'জমির সীমানা মাপুন।'} />
        {modalVisible && (
          <ModalCom
            imagesur={ImagesPath.Ellipse_1}
            imagesur_2={ImagesPath.Ellipse_2}
          />
        )}

        <View style={StyleCom.InputBody}>
          <TextCom text={'জমির দুইটি সীমানার দৈর্ঘ্য (ফূট)'} />

          <View
            style={{...StyleCom.RowAline, width: Dimantion.WindowWidth - 20}}>
            <TextInputCom
              placeholderText={'ক বাহু (ফূট)'}
              onChangeText={HendelInput_1}
              value={text_1}
              width={Dimantion.WindowWidth / 2 - 20}
            />
            <TextInputCom
              placeholderText={'খ বাহু(ফূট)'}
              onChangeText={HendelInput_2}
              value={text_2}
              width={Dimantion.WindowWidth / 2 - 20}
            />
          </View>
        </View>

        <View style={StyleCom.RowAline}>
          <ButtonCom text={'রিসেট করুন'} onPress={ClearInput} />
          <ButtonCom
            text={'ফলাফল দেখুন'}
            onPress={() => Result(+text_1, +text_2)}
          />
        </View>
        <TableCom tableData={tableData} tableData_2={tableData_2} />
      </ScrollView>
    </View>
  );
}
