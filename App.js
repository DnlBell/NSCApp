import React, { Component } from 'react';
<<<<<<< HEAD
import { StyleSheet, Text, View } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// For debugging code
//import { NativeModules } from 'react-native';
//NativeModules.DevSettings.setIsDebuggingRemotely(true);

import DropMenu from './components/DropMenu';
=======
import { StyleSheet, Text, ScrollView } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Landing from './components/Landing';
>>>>>>> 3d17a0f664206b8ecb6c0aa473992112eda40146
import ModalLogin from './components/ModalLogin';

const initialState = {
  loginVisible: false
}

const reducer = (state = initialState,action) => {
  switch(action.type){
    case 'OPEN_LOGIN':
      return{loginVisible: true}
    case 'CLOSE_LOGIN':
      return{loginVisible: false}
  }
  return state
}

const store = createStore(reducer)

export default class App extends Component {

  setModalVisible(visible) {
    this.setState({loginVisible: visible});
  }

  render() {
    return (
      <Provider store = {store}>
        <ScrollView style={styles.container}>
          <ModalLogin />
          <Landing />          
        </ScrollView>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});