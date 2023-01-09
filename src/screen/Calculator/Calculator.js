import {View, Text, TextInput} from 'react-native';
import React, {useState, useCallback} from 'react';

import HeaderCom from '../../Components/HeaderCom.js';
import Data from './Data.js';
import DropDownPicker from 'react-native-dropdown-picker';
import HendelConvator from '../../Leb/HendelConvator.js';
import NumberConvaretor from '../../Leb/NumberConvaretor.js';
import styles from './styles.js';
import BackHandelr from '../../Leb/BackHandelr.js';

export default function Calculator({navigation}) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [items1, setItems1] = useState(Data);
  const [items2, setItems2] = useState(Data);
  const [Input, setInput] = useState(null);
  const [Result, setResult] = useState('0');
  const [SelectItem1, setSelectItem1] = useState('');
  const [SelectItem2, setSelectItem2] = useState('');

  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );

  const HandelChangeInput = e => {
    setInput(e);
    const Mainvalue = HendelConvator(value1, value2, e);
    const Result = NumberConvaretor(Mainvalue);
    setResult(Result);
  };
  const HandelItemInput1 = value => {
    setSelectItem1(value.label);
  };
  const HandelItemInput2 = value => {
    setSelectItem2(value.label);
  };
  return (
    <View>
      <HeaderCom text={'একক পরির্বতন'} GoBack={() => navigation.goBack()} />
      <View style={styles.body}>
        <View style={styles.BoxInput}>
          <Text style={styles.text}>থেকে নির্বাচন করুন</Text>
          <DropDownPicker
            labelStyle={styles.Label}
            containerStyle={styles.container}
            listItemLabelStyle={styles.listItemLabel}
            searchPlaceholder="Search..."
            searchable={true}
            open={open1}
            value={value1}
            items={items1}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
            selectedItemContainerStyle={styles.selectedItem}
            dropDownContainerStyle={styles.dropDownContainer}
            searchTextInputStyle={styles.Search}
            listParentContainerStyle={styles.listContainer}
            listParentLabelStyle={styles.listContainerLabel}
            placeholderStyle={styles.placeholder}
            style={styles.MainInput}
            onSelectItem={value => HandelItemInput1(value)}
          />
        </View>
        <View style={styles.BoxInput}>
          <Text style={styles.text}>প্রতি নির্বাচন করুন</Text>
          <DropDownPicker
            labelStyle={styles.Label}
            containerStyle={styles.container}
            listItemLabelStyle={styles.listItemLabel}
            searchPlaceholder="Search..."
            searchable={true}
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}
            selectedItemContainerStyle={styles.selectedItem}
            dropDownContainerStyle={styles.dropDownContainer}
            searchTextInputStyle={styles.Search}
            listParentContainerStyle={styles.listContainer}
            placeholderStyle={styles.placeholder}
            style={styles.MainInput}
            onSelectItem={value => HandelItemInput2(value)}
          />
        </View>
        <View style={styles.BoxInput}>
          <Text style={styles.text}>Enter area in {SelectItem1}</Text>
          <TextInput
            style={styles.TextInput}
            value={Input}
            onChangeText={e => HandelChangeInput(e)}
            keyboardType="numeric"
            placeholder={`Inter Aria in ${SelectItem1}`}
          />
        </View>
        <View style={styles.BoxInput}>
          <Text style={styles.text}> Area in {SelectItem2}</Text>
          <TextInput
            style={styles.TextInput}
            editable={false}
            selectTextOnFocus={false}
            value={Result}
            placeholder="Result Heare"
          />
        </View>
      </View>
    </View>
  );
}
