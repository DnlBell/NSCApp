// Searcher.js

import React, { Component } from 'react';
import { Text, View, TextInput,TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import styles from '../styles/Searcher';
import { fetchProducts } from '../actions/searchActions';
import filter from 'mspnmodel/distribution/filter/filter';
import filterKeywords from 'mspnmodel/distribution/filter/filterKeyword';


class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {error: false}
    let kwStr = '';

    if (props.filter && props.filter.keywords && props.filter.keywords.keywords && props.filter.keywords.keywords.length) {
        kwStr = this.parseKeywords(props.filter.keywords.keywords);
    }

    this.state = {
      keywords: kwStr,
      location: ''
    };

    this.onPressSearch = this.onPressSearch.bind(this);
    this.onChangeKeywords = this.onChangeKeywords.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
  }

  parseKeywords(kwa) {
      let kwStr = '';
      for (let i = 0; i < kwa.length; i++) {
          const space = (i > 0) ? ' ' : '';
          kwStr += `${space}${kwa[i]}`;
      }

      return kwStr;
  }

  onChangeKeywords(keywords) {
      console.log('keywords', keywords);
      this.setState({keywords});
  }

  onChangeLocation(location) {
      console.log('location', location);
      this.setState({location})
  }

  onPressSearch() {
      const newFilter = new filter();
      newFilter.copy(this.props.filter);
      if (newFilter && newFilter.keywords && newFilter.keywords.keywords) {
          newFilter.keywords.keywords = this.state.keywords.split(' ');
      } else if (this.state.keywords.length) {
          const newKeywordFilter = new filterKeywords();
          newKeywordFilter.setKeywords(this.state.keywords.split(' '));
          newFilter.keywords = newKeywordFilter;
      }

      this.props.onSearch(newFilter, this.props.history);
  }

  render() {
    return (
      <View style = {styles.searcherBox}>
        <TextInput 
          style={styles.inputText}
          placeholder="What do you want to learn?"
          value={this.state.keywords}
          onChangeText={this.onChangeKeywords}
        />
          <TextInput 
          style={styles.inputText}
          placeholder="Where are you?"
          onChangeText={this.onChangeLocation}
        />
        <TouchableOpacity 
          onPress = {this.onPressSearch}
          style = {styles.searchButton}
        >
          <Text testID="search" style = {styles.seachButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

    // this links Searcher props to redux store
    const mapStateToProps = (state) => (
        {
            filter: state.searchReducer.searchFilter,
        }
    );
    
        // this links Searcher functions to the dispatcher so we can call sagas.
    const mapDispatchToProps = dispatch => (
        {
            onSearch: (filter, history) => {
                dispatch(fetchProducts(filter));    // call to the saga via action
                history.push("/results");           // push to new component on completion
            },
        }
    );


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Searcher)