import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import Footer from './Footer';

export default class Profile extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <Text>Profile Page!</Text>
        </ScrollView>
        <Footer />
      </View>
    );
  }
}