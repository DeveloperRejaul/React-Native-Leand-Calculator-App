import {StyleSheet, View} from 'react-native';
import React from 'react';

export default function Polygon() {
  return (
    <View style={styles.containar}>
      <View style={styles.hexagon}>
        <View style={styles.hexagonBefore} />
        <View style={styles.hexagonInner} />
        <View style={styles.hexagonAfter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hexagon: {
    width: 80,
    height: 40,
  },
  hexagonInner: {
    width: 80,
    height: 30,
    backgroundColor: 'red',
  },
  hexagonBefore: {
    position: 'absolute',
    top: '-60%',
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: 'red',
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: '-38%',
    left: -1,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 42,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'red',
  },
  containar: {
    height: '25%',
    width: '30%',
  },
});
