import React, {Component} from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import BrewerySearch from './BrewerySearch.js';

export default class NavBar extends Component{
  render(){
    return(
      <View style={styles.navContainer}>
        <TouchableHighlight style={styles.nav} onPress={this.props.nearMe}>
          <Text>NEAR ME</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.nav} onPress={this.props.saved}>
          <Text>SAVED</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.nav} onPress={this.props.tasted}>
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
