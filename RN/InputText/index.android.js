/**
 * Navigator是专门负责试图切换的组件
 * 注意：
 * 导航器通过路由对象来分辨不同的场景，使用renderScene方法，导航栏可以根据
 * 指定路由来渲染场景
 * 
 * 可以通过configureScene属性获取制定路由对象的配置信息，从而改变场景的动画或者
 * 手势
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  TextInput,
  Text,
  View
} from 'react-native';


export default class RNTest1 extends Component {
  render() {

    return (
      <View style={[styles.flex,styles.topStatus]}>
        <Search></Search>
      </View>
    );
  }
};


class Search extends Component {
  render() {
    return (
      <View style={[styles.flex,styles.flexDirection]}>
        <View style={[styles.flex,styles.input]}>
          <TextInput returnKeyType="search" />
        </View>
        <View style={styles.btn}>
          <Text style={styles.search}>搜索</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row',
  },

  topStatus: {
    marginTop: 25,
  },

  input: {
    height: 45,
    borderColor: 'red',
    borderWidth: 1,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },

  btn: {
    width: 45,
    marginLeft: 5,
    marginRight: 6,
    backgroundColor: '#23BEFF',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
