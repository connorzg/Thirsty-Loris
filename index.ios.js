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
import Beer from './components/Beer.js';
import NavBar from './components/NavBar.js';

export default class thirstyloris extends Component {
//rgba(157,157,157,0.05)
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          barTintColor: '#f7b20a',
          title: 'Beer Traveler',
          component: App
        }}
        renderScene={
          this.navigatorRenderScene
        }
        style={{flex: 1}}/>
    );
  }
  navigatorRenderScene(route, navigator) {
    switch (route.title) {
      case 'Beer Traveler':
        return (<App navigator={navigator} title='Home'/>);
      case 'Tried List':
        return (<TriedList navigator={navigator} title='Tried List'/>);
      case 'Saved List':
        return (<SavedList navigator={navigator} title='Saved List'/>);
      case "I\'m Feeling Lucky":
        return (<RandomList navigator={navigator} title="I'm Feeling Lucky"/>);
      case 'Beer Info':
        return (<BeerInfo navigator={navigator} title='Beer Info'/>);
      case 'Beer List':
        return (<BeerList navigator={navigator} title='Beer List'/>);
      case 'Beer':
        return (<Beer navigator={navigator} title='Beer'/>);
    }
  }
}
const styles = StyleSheet.create({
  container: {
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
