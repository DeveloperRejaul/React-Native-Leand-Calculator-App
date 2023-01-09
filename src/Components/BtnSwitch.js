import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ColorsName from '../Constents/ColorsName.js';

export default function BtnSwitch({Btn1Text, Btn2Text, Btn3Text}) {
  const [Btn1, setBtn1] = useState(true);
  const [Btn2, setBtn2] = useState(false);
  const [Btn3, setBtn3] = useState(false);

  const HandelSwitch = Prams => {
    if (Prams === 'Option1') {
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
    }
    if (Prams === 'Option2') {
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
    }
    if (Prams === 'Option3') {
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
    }
  };

  return (
    <View style={styles.BtnBody}>
      <View
        style={{
          ...styles.btnInner,
          backgroundColor: Btn1 ? ColorsName.COLOR2 : ColorsName.WHITE_02,
        }}>
        <Text onPress={() => HandelSwitch('Option1')} style={styles.btnText}>
          {Btn1Text}
        </Text>
      </View>
      <View
        style={{
          ...styles.btnInner,
          backgroundColor: Btn2 ? ColorsName.COLOR2 : ColorsName.WHITE_02,
        }}>
        <Text style={styles.btnText} onPress={() => HandelSwitch('Option2')}>
          {Btn2Text}
        </Text>
      </View>
      <View
        style={{
          ...styles.btnInner,
          backgroundColor: Btn3 ? ColorsName.COLOR2 : ColorsName.WHITE_02,
        }}>
        <Text style={styles.btnText} onPress={() => HandelSwitch('Option3')}>
          {Btn3Text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BtnBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnInner: {
    width: '33%',
  },
  btnText: {
    color: ColorsName.BLACK,
    fontSize: 18,
    textAlign: 'center',
  },
});
