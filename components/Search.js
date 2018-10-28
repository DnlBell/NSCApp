//package imports
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
//app imports
import Header from './Header';
import Searcher from './Searcher';
import Footer from './Footer';

class Search extends Component {
  render() {
    return (
    <View style={{flex:1}}>
      <ScrollView>
        <Header />
        <Searcher />
      </ScrollView>
      <Footer />
    </View>
    );
  }
};

export default Search;

