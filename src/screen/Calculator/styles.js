import {StyleSheet} from 'react-native';
import ColorsName from '../../Constents/ColorsName.js';
import Dimantion from '../../Constents/Dimantion.js';
export default styles = StyleSheet.create({
  MainInput: {
    borderRadius: 0,
    // backgroundColor: 'red',
    zIndex: 0,
  },
  container: {
    borderRadius: 0,
    width: Dimantion.WindowWidth - 20,
    alignSelf: 'center',
  },
  Label: {
    fontSize: 20,
  },
  listItemLabel: {
    color: ColorsName.BLACK,
    fontSize: 20,
  },
  selectedItem: {
    backgroundColor: ColorsName.WHITE_03,
  },
  dropDownContainer: {
    borderRadius: 0,
    maxHeight: Dimantion.WindowHeigth / 2,
    // backgroundColor: 'green',
    zIndex: 1,
  },
  Search: {
    borderRadius: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: ColorsName.WHITE_03,
    fontSize: 20,
  },
  listContainer: {
    backgroundColor: ColorsName.WHITE_02,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  placeholder: {
    color: 'grey',
    fontSize: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: ColorsName.BLACK,
    fontSize: 20,
    paddingHorizontal: 20,
    color: ColorsName.BLACK,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  body: {
    marginHorizontal: 10,
  },
  text: {
    color: ColorsName.BLACK,
    fontSize: 15,
    fontWeight: '500',
  },
  BoxInput: {
    marginTop: 10,
  },
});
