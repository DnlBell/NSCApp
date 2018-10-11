import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropMenu from './components/DropMenu';
import ModalLogin from './components/ModalLogin';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <DropMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});