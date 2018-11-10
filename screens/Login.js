import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Dimensions } from "react-native";
import {Redirect} from 'react-router-native';
import formModel from 'tcomb-form-native';

import Header from '../components/Header';
import Footer from'../components/Footer.js';

import styles from'../styles/Login.js';


var width = Dimensions.get('window').width - 18;
// set up the form model
const Form = formModel.form.Form;

// define the User model
const User = formModel.struct({
  email: formModel.String,
  password: formModel.String,
});

const options = {
  auto: 'placeholders',
  fields: {
    password: {
      password: true,
      secureTextEntry: true,
    },
    email: {
      keyboardType: 'email-address',
      autoCorrect: false,
      autoCapitalize: false,
    }
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false
    }
    this.handler = this.handler.bind(this);
  }

  handler() {
    // using the ref to grab the form value
    const formValues = this._form.getValue();
    //console.log(formValues);
    if (formValues != undefined) {
    return fetch('https://mspnapi.dolehesten.org/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uid: formValues.email,
        pwd: formValues.password
      })
    }).then((response) => response.json()).then((data)=>{
      if (data.token != undefined) {
        this.setState({token: true});
      }
    }).catch((error) => {
      console.log(error);
    })
  } else {
    return;
  }
}
    render() {
      if (this.state.token) {
        return <Redirect to="/profile"/>
      }
        return(
          <View style = {{flex:1}}>
            <ScrollView >
              <Header />
              <View style={styles.container}>
                <TouchableOpacity style = {styles.faceButton}>
                  <Text style = {styles.buttonText}>Login with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.googleButton}>
                  <Text style = {styles.buttonText}>Login with Google</Text>
                </TouchableOpacity>
                <Form 
                  type={User}
                  ref={c => this._form = c}
                  options={options} 
                />
                <Button 
                  title="Login"
                  onPress={this.handler}
                  />
              </View>
            </ScrollView>
            <Footer />
          </View>
        )
    }
};


// export this 
export default Login;