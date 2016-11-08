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
  Navigator,
  ScrollView,
  Text,
  View
} from 'react-native';


export default class RNTest1 extends Component {
  render() {
    //设置默认名字，默认组件，当程序进来的时候就显示的东西
    let defaultName = 'List';
    let defaultCompontent = List;
    return (
      <Navigator
        //初始化路由
        initialRoute={{ name: defaultName, component: defaultCompontent }}

        //配置场景
          //这个是页面之间进行跳转的动画，
          //具体有哪些？可以看这个目录下，有源代码的: 
          //node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
          //VerticalDownSwipeJump：垂直向下跳
          //HorizontalSwipeJumpFromRight
          //HorizontalSwipeJump：水平跳
        configureScene=
        {(route) => {
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }
        }

        renderScene={
          (route,navigator) =>{
            let Component = route.component;
            //3个点表示遍历这个对象
            return <Component {...route.params} navigator={navigator} />
          }
        }/>
    );
  }
};

class List extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

  //这里是定义点击事件，进入详情页
  _pressButton(){
    const{ navigator} = this.props;
    if(navigator){
      navigator.push({
        name:'Detail',
        component:Detail,
      });
    }
  }

  render(){
    return(
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>我爱你，就像老鼠爱大米</Text>
        <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>你开心，我就快乐</Text>
        <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>你好，我好，大家好啊</Text>
      </ScrollView>
    );
  }
}


class Detail extends Component{
  constructor(props){
    super(props);
    this.state ={};
  }

  _pressButton(){
    const {navigator} = this.props;
    if(navigator){
      //入栈出栈，把当前的页面pop掉，然后就返回到了上一个页面
      navigator.pop();
    }
  }

  render(){
    return(
      <ScrollView>
        <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>点击我，就回到上一个页面</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flex:{
    flex:1,
  },

  list_item:{
    height:40,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center',
  },
});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
