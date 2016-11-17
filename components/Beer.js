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
    //console.log(this.props.beerObject);
    let imgUrl = require('../images/Beer-icon.png');
    if (this.props.beerObject.labels !== undefined){
      imgUrl = {uri: this.props.beerObject.labels.large};
    } else {
      imgUrl = require('../images/Beer-icon.png');
    }
    var breweryName;
    if (this.props.beerObject.breweries) {
      var breweryName = this.props.beerObject.breweries[0].name;
    } else {
      var breweryName = '';
    }

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
          <Text style={styles.title}>{this.props.beerObject.name}</Text>
          <Text style={styles.info}>{breweryName} Brewery</Text>
          <Text style={styles.info}>Type: {this.props.beerObject.style.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.abvContainer}>
            <Text style={styles.info}>ABV: {this.props.beerObject.abv} %</Text>
          </View>
          <View style={styles.ibuContainer}>
            <Text style={styles.info}>IBU: {this.props.beerObject.ibu}</Text>
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
    padding: 10/PixelRatio.get(),
    minHeight: 150/PixelRatio.get(),
    borderColor: '#cac9cf',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5/PixelRatio.get(),
    justifyContent: 'flex-start',
    marginBottom: 5/PixelRatio.get(),
    backgroundColor: '#ffffff'

  },
  imageContainer:{
    flex: 3,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5/PixelRatio.get(),
    justifyContent: 'center',
    height: 100,
    borderBottomColor: '#f7b20a',
    borderBottomWidth: 10,

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
    flexDirection: 'column',
  },
  abvContainer:{
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor: '#cac9cf',
    padding: 5/PixelRatio.get(),
    borderBottomWidth: 2,
  },
  ibuContainer:{
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 5/PixelRatio.get(),
  },
  beerImage:{
    width: 120/PixelRatio.get(),
    height: 120/PixelRatio.get()
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'ECONOMICA'
  },
  info:{
    fontFamily: 'Raleway',
    marginBottom: 5,
  }
})
