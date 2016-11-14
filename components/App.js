import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  Switch,
  Text
} from 'react-native';
import {ListView} from 'realm/react-native';
import realm from '../utils/realm';
import axios from 'axios';
import BeerList from './BeerList.js';


// export default class App extends Component {
//
//   render() {
//     return(
//       <View>
//         <BeerList />
//       </View>
//     )
//   }
// }

export default class App extends Component {
  componentDidMount() {
    fetch('https://api.brewerydb.com/v2/beers?order=random&randomCount=10&key=71adb5730d8b61f38b3894fa400f85a7')
    .then((response) => response.json())
    .then((responseText) => {
      console.log(responseText);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {

    return(
      <View>
        {/* <BeerList dataSource={this.state.dataSource}/> */}
        
      </View>
    )
  }
}
