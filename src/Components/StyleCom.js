import {StyleSheet} from 'react-native';
import ColorsName from '../Constents/ColorsName.js';
import Dimantion from '../Constents/Dimantion.js';

export default stylesCom = StyleSheet.create({
  RowAline: {
    width: Dimantion.WindowWidth - 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  scrollWidth: {
    width: Dimantion.WindowWidth - 20,
  },
  Body: {
    width: Dimantion.WindowWidth,
    backgroundColor: ColorsName.WHITE,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
