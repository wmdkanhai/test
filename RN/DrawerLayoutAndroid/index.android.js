import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  Text,
  TouchableOpacity,
  View,
  DrawerLayoutAndroid,
  ProgressBarAndroid
} from 'react-native';



export default class RNTest1 extends Component {

  render() {
    // var navigationView = (
    //   <View style={{flex: 1, backgroundColor: '#ff0'}}>
    //     <Text style={{margin: 10, fontSize: 15, textAlign: 'center'}}>我是抽屉!</Text>
    //   </View>
    // );


    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#f45' }}>
        <Text style={{ margin: 10, fontSize: 20 }}>侧滑菜单</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>菜单1</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>菜单2</Text>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'center' }}>菜单3</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={100}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
        >

        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>React Native World!</Text>

          <Text onPress={this.show.bind(this, "gggg")}>React Native World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }

  show(txt) {
    alert(txt);
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
