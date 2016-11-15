/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import {ListView} from 'realm/react-native';
import realm from './utils/realm.js';
import App from './components/App.js';

export default class thirstyloris extends Component {

  render() {
    return (
      <View>
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Search',
          Component:App
        }} />
      <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('thirstyloris', () => thirstyloris);
