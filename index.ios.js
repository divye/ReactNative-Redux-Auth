/**
 * Author: Divye Gupta
 * Date: 7th September 2016
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import userReducers from './app/reducers'
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Login from './app/containers/Login'

//create the store
const store = createStore(combineReducers({userReducers}));

class AppContainer extends Component {
  render(){
    return(
      <Login />);
  }
}
const auth = () => (
  <Provider store ={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('auth', () => auth);
