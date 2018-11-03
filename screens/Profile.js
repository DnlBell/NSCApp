//Package imports
import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { withRouter } from 'react-router-native';

import LabeledInput from '../components/LabeledInput';


//Component imports
import Footer from '../components/Footer';
import Header from '../components/Header';

var width = Dimensions.get('window').width - 18;

const Profile = (props) => {

  const {viewStyle, imageStyle, textStyle } = styles;

  /* To be implemented
  //Fetching user data from DB
  function getUserProfile() {
    fetch('http://bonzo.brainsplode.com:4001/mspnsecure/user/profile', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + userToken,
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
    });
  }
  */

  return (
    <View style={viewStyle}>
      <ScrollView>
        <Header />
        
        <Image
        style={imageStyle}
        source={{uri: 'https://media.licdn.com/dms/image/C5603AQHIYIcae6HY0A/profile-displayphoto-shrink_200_200/0?e=1546473600&v=beta&t=w8zYJDOOXYs2BSxBzxSKWj5xDjIHyobDPT8TF84JS-Q'}}
        />

        <Text style={textStyle}>Welcome, name!</Text>

        <LabeledInput
          label="First Name"
          textContentType='givenName'
          underlineColorAndroid='transparent'
        />

        <LabeledInput
          label="Last Name"
          textContentType='familyName'
          underlineColorAndroid='transparent'
        />

        <LabeledInput
          label="Phone Number"
          textContentType='telephoneNumber'
          dataDetectorTypes='phoneNumber'
          underlineColorAndroid='transparent'
        />

        <Text style={textStyle}>Enrolled Classes</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}>
          
        </ScrollView>

        <Text style={textStyle}>Saved Classes</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}>
          
        </ScrollView>
        <TouchableOpacity 
          onPress = {() => props.history.push("/login")}
          style = {styles.loginButton}
        >
          <Text style = {styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = {
  viewStyle: {
    flex:1
  },

  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10
  },

  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  loginButton : {
    backgroundColor: '#FF6622',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 9,
    width: width,
    padding: 18
  },
  loginButtonText: {
    color:'#fff',
    fontSize:24
  }
}

export default withRouter(Profile);