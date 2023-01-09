import {StyleSheet} from 'react-native';
import ColorsName from '../../../Constents/ColorsName.js';
import Dimantion from '../../../Constents/Dimantion.js';
import FontsName from '../../../Constents/FontsName.js';

export default styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: ColorsName.WHITE_04,
    marginVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  HeaderTitle: {
    fontSize: 17,
    color: '#000',
    borderRadius: 10,
    textAlignVertical: 'center',
    fontFamily: FontsName.BN_ANEK_BOLD,
  },
  Scroll: {
    marginHorizontal: 10,
    marginBottom: 60,
  },
  textItem: {
    color: '#000',
    fontSize: 18,
    backgroundColor: ColorsName.WHITE_02,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginBottom: 7,
    borderRadius: 7,
    fontFamily: FontsName.BN_NOTO_REGULAR,
  },
  TextInput: {
    backgroundColor: ColorsName.WHITE,
    borderWidth: 1,
    position: 'absolute',
    width: Dimantion.WindowWidth - 120,
    height: 35,
    borderRadius: 5,
    borderColor: ColorsName.BLACK,
    left: '15%',
    top: '20%',
    fontSize: 15,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  HeaderText: {
    position: 'relative',
  },
});
