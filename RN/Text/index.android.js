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

//导入Header组件
import Header from './header';

export default class RNTest1 extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header></Header>
        <List title='我要为我的以后负责，好好学习'></List>
        <List title='一起去看海，听海的声音'></List>
        <List title='设计模式，你值得拥有'></List>


        <ImportantNews
          news={[
            '解放军报报社大楼正在拆除 标识已被卸下(图)',
            '韩国停签东三省52家旅行社 或为阻止朝旅游创汇',
            '南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动 有女生献初吻-南京大学生发起亲吻陌生人活动 有女生献初吻',
            '防总部署长江防汛:以防御98年量级大洪水为目标'
          ]}>
        </ImportantNews>
      </View>
    );
  }
};

//自定义List
class List extends Component {
  show(title) {
    alert(title);
  };
  render() {
    return (
      //onPress:这是绑定点击事件
      <View style={styles.list_item}>
        <Text onPress={this.show.bind(this,this.props.title)}
        style={styles.list_item_font}>{this.props.title}</Text>
      </View>
    );
  }
};

//自定义组件
class ImportantNews extends Component {
  show(title) {
    alert(title);
  };
  render() {
    var newss = [];
    for (var i in this.props.news) {
      var text = (
        <Text
          onPress={this.show.bind(this, this.props.news[i])}
          numberOfLines={2}
          style={styles.news_item}
          key={i}
          >
          {this.props.news[i]}
        </Text>
      );
      newss.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {newss}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  //这里是设置每个条目的格式
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
  //条目中文字的样式
  list_item_font: {
    fontSize: 16,
  },

  news_item: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 40,
  },
  news_title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#CD1D1C',
        marginLeft:10,
        marginTop:15,

    },
});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
