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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  nav: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
