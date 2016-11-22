import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  PixelRatio,
  TextInput,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';


export default class RNTest1 extends Component {
  render() {

    //onPress:绑定
    return (
      <View style={styles.flex}>

        <TouchableHighlight onPress={this.show.bind(this, 'hahahha')} underlayColor='#E1F6FF'>
          <Text style={styles.item}>少壮不努力</Text>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.show.bind(this, '12345')}>
          <Text style={styles.item}>老大徒伤悲</Text>
        </TouchableOpacity>

      </View>
    );
  }
  
  show(txt) {
    alert(txt);
  }
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  item: {
    fontSize: 18,
    color: '#434343',
    marginLeft: 5,
    marginTop: 10,
  },

});

AppRegistry.registerComponent('RNTest1', () => RNTest1);
