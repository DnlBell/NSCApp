import React, { Component } from 'react';
import { Text, View, TextInput,TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import styles from '../styles/Searcher';

class Searcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      location: ''
    }
  }
  render() {
    return (
      <View style = {styles.searcherBox}>
        <TextInput 
          style={styles.inputText}
          placeholder="What do you want to learn?"
          onChangeText={(keyword) => this.setState({keyword})}
        />
          <TextInput 
          style={styles.inputText}
          placeholder="Where are you?"
          onChangeText={(location) => this.setState({location})}
        />
        <TouchableOpacity 
          onPress = {() => this.props.history.push("/results", {keyword:this.state.keyword, location:this.state.location})}
          style = {styles.searchButton}
        >
          <Text style = {styles.seachButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default withRouter(Searcher);