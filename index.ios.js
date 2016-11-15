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
import NavBar from './components/NavBar.js';

export default class thirstyloris extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: App
        }}
        renderScene={
          this.navigatorRenderScene
        }
        style={{flex: 1}}/>
    );
  }
  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Home':
        return (<App navigator={navigator} title='Home'/>);
      case 'Tried List':
        return (<TriedList navigator={navigator} title='Tried List'/>);
      case 'Saved List':
        return (<SavedList navigator={navigator} title='Saved List'/>);
      case 'Random List':
        return (<RandomList navigator={navigator} title='Random List'/>);
    }
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
  }
});

AppRegistry.registerComponent('thirstyloris', () => thirstyloris);
