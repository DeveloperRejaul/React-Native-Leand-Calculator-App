import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';
import {useTranslation} from 'react-i18next';

import Dimantion from '../Constents/Dimantion.js';
import ColorsName from '../Constents/ColorsName.js';
import StateData from '../Constents/StateData.js';
import FontsName from '../Constents/FontsName.js';

export default function TableCom({tableData, tableData_2}) {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1, borderColor: ColorsName.COLOR2}}>
        <Row
          data={StateData.tableHead}
          flexArr={[1]}
          style={styles.HeadStyle}
          textStyle={styles.HeadeText}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={StateData.tableTitle}
            style={styles.title}
            heightArr={[35, 35]}
            textStyle={styles.text}
          />
          <Rows
            data={tableData}
            flexArr={[1, 2]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  HeadStyle: {
    height: 40,
    width: Dimantion.WindowWidth - 20,
    backgroundColor: '#019267',
    color: '#fff',
  },
  HeadeText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontFamily: FontsName.BN_HIND_BOLD,
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  text: {
    textAlign: 'center',
    color: '#1B1A17',
    fontSize: 18,
    fontFamily: FontsName.BN_NOTO_BOLD,
  },
  row: {
    height: 35,
  },
  HeadStyle_2: {
    height: 40,
    width: Dimantion.WindowWidth - 20,
    backgroundColor: '#6BCB77',
    color: '#fff',
  },
  container: {
    marginBottom: 20,
  },
});
