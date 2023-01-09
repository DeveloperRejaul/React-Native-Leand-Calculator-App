import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  SquareBody: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },

  titelBox: {
    backgroundColor: '#00ad7f',
    height: 40,
    width: '95%',
    marginTop: 10,
    borderColor: '#00ad7f',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  titelText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  InputTop: {
    color: '#E45826',
    fontSize: 18,
  },
  Input: {
    borderRadius: 5,
    width: windowWidth / 2 - 20,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 20,
    color: '#000',
  },
  InputBody: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RowAline: {
    width: windowWidth - 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#019267',
    borderRadius: 5,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 25,
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 7,
    fontWeight: '600',
  },
  HeadStyle: {
    height: 40,
    width: windowWidth - 20,
    backgroundColor: '#019267',
    color: '#fff',
  },
  HeadStyle_2: {
    height: 40,
    width: windowWidth - 20,
    backgroundColor: '#6BCB77',
    color: '#fff',
  },
  text: {
    textAlign: 'center',
    color: '#1B1A17',
    fontWeight: 'bold',
    fontSize: 18,
  },
  wrapper: {
    flexDirection: 'row',
  },
  row: {
    height: 35,
  },
  title: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  HeadeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
