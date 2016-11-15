import React, {Component} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class NavBar extends Component{
  render(){
    return(
      <View style={styles.navContainer}>
        <TouchableHighlight style={styles.nav}>
          <Text>NEAR ME</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.nav}>
          <Text>SAVED</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.nav}>
          <Text>TASTED</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  navContainer: {
    flex: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 30
  },
  nav: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10
  }
})
