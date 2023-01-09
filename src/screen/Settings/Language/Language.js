import {Text, View, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import ColorsName from '../../../Constents/ColorsName.js';
import FontsName from '../../../Constents/FontsName.js';

const LANGUAGES = [
  {code: 'en', label: 'English'},
  {code: 'bn', label: 'Bangali'},
  {code: 'hi', label: 'Hindi'},
];
export default function Language() {
  const {i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;
  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>ভাষা পরির্বতন করুন</Text>
      <View style={styles.Switch}>
        {LANGUAGES.map(language => {
          const selectedLanguage = language.code === selectedLanguageCode;
          return (
            <Pressable
              style={[
                styles.btn,
                selectedLanguage ? styles.Active : styles.InActive,
              ]}
              key={language.code}
              disabled={selectedLanguage}
              onPress={() => setLanguage(language.code)}>
              <Text style={styles.Text}>{language.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: ColorsName.WHITE_02,
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },

  title: {
    fontFamily: FontsName.BN_HIND_BOLD,
    fontSize: 20,
    color: ColorsName.BLACK,
  },
  Switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: '33%',
  },
  Active: {
    backgroundColor: ColorsName.COLOR2,
  },
  InActive: {
    backgroundColor: ColorsName.WHITE_02,
  },
  Text: {
    fontSize: 18,
    textAlign: 'center',
    color: ColorsName.BLACK,
  },
});
