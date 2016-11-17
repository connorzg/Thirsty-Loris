import React, {Component} from 'react';
import _ from 'lodash';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  PixelRatio,
  Switch,
  Text
} from 'react-native';
import {ListView} from 'realm/react-native';
import BeerInfo from './BeerInfo.js';

export default class Beer extends Component {

  _beerPress() {
    console.log(this.props.beerObject);
    this.props.navigator.push({
      title: 'Beer Info',
      component: BeerInfo,
      passProps: {
        beerObject: this.props.beerObject
      }
    })
  }

  render() {
    let imgUrl = require('../images/Beer-icon.png');
    if (this.props.beerObject.labels !== undefined){
      imgUrl = {uri: this.props.beerObject.labels.large};
    } else {
      imgUrl = require('../images/Beer-icon.png');
    }
    //console.log(this.props.beerObject);
    return(
      <TouchableOpacity onPress={() => this._beerPress()}>
      <View style={styles.buttonContainer}>
        <View style={styles.imageContainer}>
          <Image
          style={styles.beerImage}
          source={imgUrl}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text>{this.props.beerObject.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.abvContainer}>
            <Text>ABV: {this.props.beerObject.abv} %</Text>
          </View>
          <View style={styles.ibuContainer}>
            <Text>IBU: {this.props.beerObject.ibu}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    flex: 1,
    height: 150/PixelRatio.get(),
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5/PixelRatio.get(),
    justifyContent: 'flex-start',
    marginBottom: 5/PixelRatio.get(),
    backgroundColor: '#dedede'

  },
  imageContainer:{
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5/PixelRatio.get(),
    justifyContent: 'center'

  },
  contentContainer:{
    flex: 8,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 5/PixelRatio.get(),
    justifyContent: 'flex-start',

  },
  infoContainer:{
    flex: 4,
    flexDirection: 'column'
  },
  abvContainer:{
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  ibuContainer:{
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  beerImage:{
    width: 120/PixelRatio.get(),
    height: 120/PixelRatio.get()
  }
})
