import React, {useCallback} from 'react';
import BackHandelr from '../../../Leb/BackHandelr.js';
import HupCircle from '../../../Components/HupCircle.js';

export default function Ellipse({navigation}) {
  // Handel hardwareBackPress
  BackHandelr(
    useCallback(() => {
      navigation.goBack();
      return true;
    }, [navigation.goBack]),
  );

  return (
    <HupCircle
      goback={() => navigation.goBack()}
      HeaderTitle={'বৃত্তাবাস'}
      HeaderText={'বৃত্তাবাস জমি'}
    />
  );
}
