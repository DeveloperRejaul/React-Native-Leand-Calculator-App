import {StyleSheet} from 'react-native';

import ColorsName from '../../Constents/ColorsName.js';
import FontsName from '../../Constents/FontsName.js';

export default styles = StyleSheet.create({
  MainBody: {
    marginHorizontal: 10,
  },
  BtnTitle: {
    fontSize: 20,
    color: ColorsName.BLACK,
    fontFamily: FontsName.BN_HIND_BOLD,
  },
  BtnContainar: {
    marginTop: 30,
    backgroundColor: ColorsName.WHITE_02,
    padding: 10,
    borderRadius: 5,
  },
});
