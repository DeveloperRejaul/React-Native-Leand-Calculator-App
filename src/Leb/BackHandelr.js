import {BackHandler} from 'react-native';
import React, {useEffect} from 'react';

export default function BackHandelr(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}
