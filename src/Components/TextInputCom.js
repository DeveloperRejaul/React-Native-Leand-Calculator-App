import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import ColorsName from '../Constents/ColorsName.js';
import Dimantion from '../Constents/Dimantion.js';

export default function TextInputCom({
  placeholderText,
  onChangeText,
  value,
  width,
}) {
  const [Focused, isFocused] = useState(false);
  const HandelFocused = () => isFocused(true);
  const HandelBlur = () => isFocused(false);

  return (
    <View>
      <TextInput
        maxLength={12}
        onFocus={HandelFocused}
        onBlur={HandelBlur}
        onChangeText={onChangeText}
        style={{
          ...styles.Input,
          borderColor: Focused ? ColorsName.BorderActive : ColorsName.COLOR3,
          width: width ? width : Dimantion.WindowWidth - 20,
        }}
        value={value}
        placeholder={placeholderText}
        placeholderTextColor={ColorsName.PLACEHOLDER}
        keyboardType={'numeric'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    borderColor: ColorsName.COLOR3,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    color: ColorsName.BLACK,
  },
});
