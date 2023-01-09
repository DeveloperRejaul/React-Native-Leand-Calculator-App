import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Data from './Data.js';
import styles from './Styles.js';
import HeaderCom from './../../../Components/HeaderCom.js';

export default Akok = ({navigation}) => {
  return (
    <View>
      <View style={styles.HeaderText}>
        <HeaderCom GoBack={() => navigation.goBack()} text={'বিভিন্ন একক'} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Scroll}>
          {Data.map(i => (
            <Item Data={i} key={Math.random()} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

function Item({Data}) {
  return (
    <View>
      <View style={styles.Header}>
        <Text style={styles.HeaderTitle}> {Data.Category_name}</Text>
      </View>
      {Data.SubCategory.map(value => (
        <Text key={Math.random()} style={styles.textItem}>
          {value.value}
        </Text>
      ))}
    </View>
  );
}
