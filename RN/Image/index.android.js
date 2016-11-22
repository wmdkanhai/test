import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';


var imgs = [
  'http://ss.bdimg.com/static/superman/img/logo/logo_redBlue.png',
  'https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/img/xiaoman2016_24.png',
  'http://image.tianjimedia.com/uploadImages/2015/083/30/VVJ04M7P71W2.jpg',
  "http://img5.duitang.com/uploads/item/201504/16/20150416H0755_LfSyA.jpeg",
  "http://image.tianjimedia.com/uploadImages/2013/324/E85BW32E3U69_1000x500.jpg"
];

export default class RNTest1 extends Component {
  render() {

    //onPress:绑定
    return (
      <View style={styles.flex}>
        <MyImage imgs={imgs}></MyImage>

      </View>
    );
  }
}


class MyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      imgs: this.props.imgs,
    }
  };

  //source={{uri:this.state.imgs[this.state.count]}}网络图片
  //source={require('../xiaoming.png')}本地图片
  render() {
    return (
      <View style={[styles.flex, { alignItems: 'center' }]}>

        <View style={styles.image}>
          <Image style={styles.img}
            resizeMode="contain"
            source={{ uri: this.state.imgs[this.state.count] }}
            />
        </View>

        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview.bind(this)}>
            <View style={styles.btn}>
              <Text>
                上一张
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.goNext.bind(this)}>
            <View style={styles.btn}>
              <Text>
                下一张
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  goPreview() {
    var count = this.state.count;
    count--;
    if (count >= 0) {
      this.setState({
        count: count,
      });
    }
  }

  goNext() {
    var count = this.state.count;
    count++;
    if (count < this.state.imgs.length) {
      this.setState({
        count: count,
      });
    }
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  img: {
    width: 298,
    height: 198,
  },

  image: {
    marginTop:30,
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btns:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center'
  },

  btn:{
    width:60,
    height:30,
    borderColor:'#0089FF',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:20
  }

});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
