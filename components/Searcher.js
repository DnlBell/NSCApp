import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { withRouter } from 'react-router-native';

var width = Dimensions.get('window').width - 18;

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
      <View>
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
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
inputText: {
  backgroundColor: '#fff',
  marginBottom: 8,
  marginLeft: 9,
  width: width,
  padding: 18
},
searchButton : {
  backgroundColor: '#FF6622',
  alignItems: 'center',
  marginBottom: 30,
  marginLeft: 9,
  width: width,
  padding: 18
},
seachButtonText: {
  color:'#fff',
  fontSize:24
},
});

export default withRouter(Searcher);