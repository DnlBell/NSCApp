import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
// For debugging code
//import { NativeModules } from 'react-native';
//NativeModules.DevSettings.setIsDebuggingRemotely(true);
import DropMenu from './components/DropMenu';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Landing from './components/Landing';
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