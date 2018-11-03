//package imports
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
//app imports
import Header from '../components/Header';
import Searcher from '../components/Searcher';
import Footer from '../components/Footer';

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

