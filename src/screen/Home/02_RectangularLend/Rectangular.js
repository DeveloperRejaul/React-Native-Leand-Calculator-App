import {View, LayoutAnimation, ScrollView} from 'react-native';
import React, {useState, useCallback} from 'react';

import HeaderCom from '../../../Components/HeaderCom.js';
import ModalCom from '../../../Components/ModalCom.js';
import StateData from '../../../Constents/StateData.js';
import NumberConvaretor from '../../../Leb/NumberConvaretor.js';
import HendelAleart from '../../../Leb/HendelAleart.js';
import ButtonCom from '../../../Components/ButtonCom.js';
import HeaderTitleCom from '../../../Components/HeaderTitleCom.js';
import TableCom from '../../../Components/TableCom.js';
import TextCom from '../../../Components/TextCom.js';
import TextInputCom from '../../../Components/TextInputCom.js';
import Dimantion from '../../../Constents/Dimantion.js';
import StyleCom from '../../../Components/StyleCom.js';
import BackHandelr from '../../../Leb/BackHandelr.js';

function Rectangular({navigation}) {
  const Inputwidth = Dimantion.WindowWidth / 2 - 30;

  const [modalVisible, setModalVisible] = useState(false);
  const [text_1, setText_1] = useState(null);
  const [text_2, setText_2] = useState(null);
  const [text_3, setText_3] = useState(null);
  const [text_4, setText_4] = useState(null);
  const [tableData, setTableData] = useState(StateData.tableData);
  const [tableData_2, setTableData_2] = useState(StateData.tableData_2);

  // Handel Modell
  const HandelModalVisible = modalVisible => {
    LayoutAnimation.easeInEaseOut();
    setModalVisible(modalVisible);
  };

  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );

  const HendelInput_1 = text => {
    console.log(text);
    if (text.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }
    setText_1(text);
  };
  const HendelInput_2 = text => {
    if (text.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }
    setText_2(text);
  };
  const HendelInput_3 = text => {
    if (text.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }
    setText_3(text);
  };
  const HendelInput_4 = text => {
    if (text.toString().length >= 12) {
      HendelAleart('১২ সংখ্যার বেশি ইনফুট নেওয়া সম্ভব নই');
    }
    setText_4(text);
  };

  const ClearInput = () => {
    setText_1(null);
    setText_2(null);
    setText_3(null),
      setText_4(null),
      setTableData(StateData.tableData),
      setTableData_2(StateData.tableData_2);
  };

  const Result = (text_1, text_2, text_3, text_4) => {
    if ((text_1, text_2, text_3, text_4)) {
      let Height = (text_1 + text_2) / 2;
      let width = (text_3 + text_4) / 2;

      let Square_Feet = NumberConvaretor(Height * width);
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
      HendelAleart('দয়া করে ইনফুট দিন');
    }
  };

  return (
    <View style={StyleCom.Body}>
      <HeaderCom
        text={'আয়তকার'}
        IconName={'eye'}
        GoBack={() => navigation.goBack()}
        ShowModel={() => HandelModalVisible(!modalVisible)}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={StyleCom.scrollWidth}>
          <HeaderTitleCom text={'আয়তকার জমির সীমানা মাপুন।'} />
          {modalVisible && (
            <ModalCom text="Area = Length × Width " text_2="Area = A × B" />
          )}
          <View style={styles.InputBody}>
            <TextCom text={'জমির চারটি সীমানার দৈর্ঘ্য এবং প্রস্থ (ফূট)'} />
            <View style={StyleCom.InputItems}>
              <TextInputCom
                width={Inputwidth}
                onChangeText={HendelInput_1}
                value={text_1}
                placeholderText={'১ম দৈর্ঘ্য'}
              />
              <TextInputCom
                width={Inputwidth}
                onChangeText={HendelInput_2}
                value={text_2}
                placeholderText={'২য় দৈর্ঘ্য'}
              />
              <TextInputCom
                width={Inputwidth}
                onChangeText={HendelInput_3}
                value={text_3}
                placeholderText={'১ম প্রস্থ'}
              />
              <TextInputCom
                width={Inputwidth}
                onChangeText={HendelInput_4}
                value={text_4}
                placeholderText={'২য় প্রস্থ'}
              />
            </View>
          </View>

          <View style={StyleCom.RowAline}>
            <ButtonCom text={'রিসেট করুন'} onPress={() => ClearInput(null)} />
            <ButtonCom
              text={'ফলাফল দেখুন'}
              onPress={() => Result(+text_1, +text_2, +text_3, +text_4)}
            />
          </View>
          <TableCom tableData={tableData} tableData_2={tableData_2} />
        </View>
      </ScrollView>
    </View>
  );
}
export default Rectangular;
