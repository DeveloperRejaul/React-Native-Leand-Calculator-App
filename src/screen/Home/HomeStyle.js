import {StyleSheet} from 'react-native';
import ColorsName from '../../Constents/ColorsName.js';
import Dimantion from '../../Constents/Dimantion.js';
import FontsName from '../../Constents/FontsName.js';

export default styles = StyleSheet.create({
  containar: {
    zIndex: 1,
  },
  Header: {
    backgroundColor: ColorsName.Blue,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  BoxText2: {
    width: '100%',
    height: '80%',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  HtitleText: {
    color: ColorsName.WHITE,
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: FontsName.BN_BALOODA_BOLD,
  },
  HeaderText: {
    color: ColorsName.WHITE,
    marginLeft: 30,
    fontSize: 25,
    fontFamily: FontsName.EN_RIGHTEOOUS_REGULAR,
  },
  Scroll: {
    marginHorizontal: 10,
    marginVertical: 10,
  },

  Box: {
    backgroundColor: ColorsName.WHITE,
    width: Dimantion.WindowWidth / 2 - 30,
    height: Dimantion.WindowHeigth / 4.5,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: ColorsName.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  BoxItem2: {
    width: '70%',
    height: '40%',
    backgroundColor: ColorsName.RED,
    marginTop: 10,
  },
  BoxText: {
    marginTop: 20,
    color: ColorsName.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: ColorsName.Blue,
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 3,
    borderRadius: 5,
  },
  List: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 100,
  },
  BoxCircle: {
    width: 80,
    height: 80,
    backgroundColor: ColorsName.RED,
    borderRadius: 50,
  },
  Polygon: {
    marginTop: 20,
  },
  PolygonText: {
    backgroundColor: ColorsName.Blue,
    fontSize: 15,
    color: ColorsName.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
    width: '100%',
  },
  RText: {
    position: 'absolute',
    fontSize: 17,
    color: ColorsName.Blue,
  },
  Btext1: {
    left: 10,
    top: '30%',
  },
  Btext2: {
    top: 0,
    left: '50%',
  },
  Btext3: {
    right: 10,
    top: '30%',
  },
  Btext4: {
    bottom: '45%',
    left: '50%',
  },
  Akkok: {
    backgroundColor: ColorsName.Blue,
    height: '90%',
    width: '90%',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 5,
  },
  AkkokText: {
    fontSize: 20,
    textAlign: 'center',
    color: ColorsName.WHITE,
    fontWeight: 'bold',
  },
});
