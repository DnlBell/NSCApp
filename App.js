import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import Landing from './components/Landing';
import Login from './components/Login';
import MenuBar from './components/MenuBar.js'


export default class App extends Component {

  setModalVisible(visible) {
    this.setState({loginVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Landing />          
        </ScrollView>
        <MenuBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    flex: 3,
    backgroundColor: '#fff'
  }
});