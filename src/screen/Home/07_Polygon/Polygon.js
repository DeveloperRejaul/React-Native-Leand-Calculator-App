import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import Dimantion from '../../../Constents/Dimantion.js';
import ColorsName from '../../../Constents/ColorsName.js';
import NumConv from '../../../Leb/NumberConvaretor.js';
import FontsName from '../../../Constents/FontsName.js';
import HeaderCom from '../../../Components/HeaderCom.js';
import ButtonCom from '../../../Components/ButtonCom.js';
import ModalCom from '../../../Components/ModalCom.js';
import ImagesPath from '../../../Constents/ImagesPath.js';

export default function Polygon({navigation}) {
  const [inputs, setInputs] = useState([
    {value: ''},
    {value: ''},
    {value: ''},
    {value: ''},
    {value: ''},
  ]);
  const [Result, setResult] = useState(null);
  const [Perimeter, setPerimeter] = useState(null);
  const [ModalVisible, setModalVisible] = useState(false);

  const HandelCreateInput = () => {
    setInputs([...inputs, {value: ''}]);
  };
  const HandelRemoveInput = index => {
    const List = [...inputs];
    List.splice(index, 1);
    setInputs(List);
  };
  const HandelInputChange = (value, index) => {
    const List = [...inputs];
    List[index].value = value;
    setInputs(List);
  };
  const HandelResult = () => {
    // let InputLength = inputs.length;
    let Sum = 0;
    inputs.map((e, i) => (Sum += Number(e.value)));
    // number of side
    let InputLength = inputs.length;
    // leanth of Side
    let a = Sum / InputLength;
    let Area =
      (InputLength * Math.pow(a, 2)) / (4 * Math.tan(Math.PI / InputLength));
    setPerimeter(Sum);
    setResult(NumConv(Area));
  };

  const HandelModalVisible = ModalVisible => {
    LayoutAnimation.easeInEaseOut();
    setModalVisible(!ModalVisible);
  };
  return (
    <View style={styles.Body}>
      <HeaderCom
        text={'বহুভুজ জমি'}
        IconName={'eye'}
        GoBack={() => navigation.goBack()}
        ShowModel={() => HandelModalVisible(ModalVisible)}
      />

      <ScrollView>
        <View style={styles.container}>
          {ModalVisible && (
            <ModalCom ImgStyle={styles.img} imagesur={ImagesPath.Ploygon} />
          )}

          {inputs.map((element, index) => (
            <View key={index} style={styles.InnerContainer}>
              <View style={styles.InputBody}>
                <TextInput
                  keyboardType="decimal-pad"
                  style={styles.Input}
                  defaultValue={'0'}
                  value={element.value}
                  onChangeText={value => HandelInputChange(value, index)}
                  placeholder={'ইনফুট দিন'}
                  placeholderTextColor={'#433a513d'}
                />
                {inputs.length > 3 && (
                  <Pressable onPress={() => HandelRemoveInput(index)}>
                    <Text style={styles.remove}> সরান</Text>
                  </Pressable>
                )}
              </View>

              {inputs.length - 1 === index && (
                <View style={styles.Row}>
                  <ButtonCom
                    width={Dimantion.WindowWidth / 2 - 30}
                    text={'ফলাফল'}
                    onPress={() => HandelResult(inputs)}
                  />
                  {inputs.length < 20 && (
                    <ButtonCom
                      text={'নতুন ঘর তৈরী করুন'}
                      onPress={HandelCreateInput}
                    />
                  )}
                </View>
              )}
            </View>
          ))}

          <View style={styles.result}>
            <Text style={styles.resulText}>পরিসীমা: {Perimeter}</Text>
            <Text style={styles.resulText}>ক্ষেত্রফল: {Result}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Body: {
    flex: 1,
  },
  InputBody: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  Input: {
    borderWidth: 1,
    width: Dimantion.WindowWidth - 120,
    height: 40,
    borderColor: ColorsName.COLOR2,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  remove: {
    width: 90,
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
    textAlignVertical: 'center',
    borderColor: ColorsName.RED,
    borderRadius: 5,
    fontSize: 18,
    color: ColorsName.BLACK,
    fontFamily: FontsName.BN_NOTO_REGULAR,
  },
  AddInput: {
    fontSize: 18,
    width: Dimantion.WindowWidth / 2.2,
    height: 40,
    borderWidth: 1,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderColor: ColorsName.Blue,
    color: ColorsName.BLACK,
    fontFamily: FontsName.BN_NOTO_REGULAR,
  },
  resultFielt: {
    marginVertical: 20,
  },
  resultBtn: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: ColorsName.Blue,
    height: 40,
    width: Dimantion.WindowWidth / 2.2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    color: ColorsName.BLACK,
    fontFamily: FontsName.BN_NOTO_REGULAR,
  },
  resulText: {
    fontSize: 18,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  result: {
    marginVertical: 20,
  },
  resulText: {
    fontSize: 20,
    color: ColorsName.BLACK,
  },
  container: {
    marginHorizontal: 10,
  },
  img: {
    width: Dimantion.WindowWidth - 20,
    height: 220,
    resizeMode: 'cover',
  },
});
