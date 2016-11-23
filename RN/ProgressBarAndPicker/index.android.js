import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  TouchableOpacity,
  Picker,
  View,
  ProgressBarAndroid
} from 'react-native';



export default class RNTest1 extends Component {

  constructor(props){
    super(props);
    this.state = {
      language:null
    };
  }

  render() {
    return (
      <View style={[styles.flex,{marginTop:45}]}>
        <Text>Picker组件的学习</Text>
        <Text>加油啊！</Text>

         <Picker
          selectedValue={this.state.language}
          //注意这里的箭头函数
          onValueChange={lang => this.setState({language:lang})}
          //默认就是对话框的形式
          mode="dialog"
          style={{color:'#f00'}}
        >

          <Picker.Item label="语文" value="chinese"/>
          <Picker.Item label="数学" value="math"/>
          <Picker.Item label="物理" value="Physics"/>
          <Picker.Item label="化学" value="Chemistry"/>
        </Picker>

        <Text>{this.state.language}</Text>

        <ProgressBarAndroid styleAttr="SmallInverse" />
      </View>
      //进度条的使用：包含的样式：
      //Small LargeInverse Inverse Horizontal SmallInverse Large
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
