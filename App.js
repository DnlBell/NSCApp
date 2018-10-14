import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import Landing from './components/Landing'
import DropMenu from './components/DropMenu';
import ModalLogin from './components/ModalLogin';
import CourseList from './components/CourseList';

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
          <CourseList />
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