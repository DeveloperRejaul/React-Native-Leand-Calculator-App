import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import ColorsName from '../Constents/ColorsName.js';
import Dimantion from '../Constents/Dimantion.js';

export default function ModalCom({
  text,
  imagesur,
  text_2,
  imagesur_2,
  height,
  ImgStyle,
}) {
  return (
    <View
      style={{
        ...styles.modal,
        height: height,
      }}>
      {text && <Text style={styles.text}>{text}</Text>}
      {text_2 && <Text style={styles.text}>{text_2}</Text>}
      {imagesur && <Image style={ImgStyle} source={imagesur} />}
      {imagesur_2 && <Image source={imagesur_2} />}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: ColorsName.BLACK,
    fontSize: 20,
  },
  modal: {
    backgroundColor: ColorsName.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimantion.WindowWidth - 20,
    height: 60,
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: ColorsName.COLOR3,
    paddingVertical: 5,
  },
});
