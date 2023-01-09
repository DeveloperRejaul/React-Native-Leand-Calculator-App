import {Alert} from 'react-native';

export default function HendelAleart(text, cancel = false) {
  const HandelAlert = Alert.alert('সতর্ক বার্তা', text, [
    cancel && {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'OK',
    },
  ]);
  return HandelAlert;
}
