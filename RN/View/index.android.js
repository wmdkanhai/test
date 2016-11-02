/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  View,
  TextInput
} from 'react-native';

var onePT = 1 / PixelRatio.get();

export default class RNTest1 extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.content}>

          <View style={[styles.flex, styles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={[styles.item, styles.lineLeftRight]}>
            <View style={[styles.flex, styles.center, styles.lineCenter]}>
              <Text>酒店</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text>酒店</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={[styles.flex, styles.center, styles.lineCenter]}>
              <Text>酒店</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text>酒店</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  content: {
    marginTop: 200,
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'red',
    borderRadius:5,
    padding:2,
  },
  item: {
    flex: 1,
    height: 80,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  lineLeftRight: {
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },

  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  lineCenter: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },
});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
