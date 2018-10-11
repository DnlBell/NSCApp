import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import DropMenu from './components/DropMenu';
import ModalLogin from './components/ModalLogin';

const initialState = {
  loginVisible: false,
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

export default class App extends React.Component {

  setModalVisible(visible) {
    this.setState({loginVisible: visible});
  }

  render() {
    return (
      <Provider store = {store}>
        <View style={styles.container}>
          <ModalLogin />
          <DropMenu />
        </View>
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