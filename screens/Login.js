import React, {Component} from 'react';
import { View, ScrollView, Text, TouchableHighlight, StyleSheet, Button } from 'react-native';
import { Dimensions } from "react-native";

import formModel from 'tcomb-form-native';

import Header from '../components/Header';


var width = Dimensions.get('window').width - 18;
// set up the form model
const Form = formModel.form.Form;

// define the User model
const User = formModel.struct({
  email: formModel.String,
  password: formModel.String,
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
  }
  
  // componentDidMount() {

  // }
  // handle form submission
  handler() {
    // using the ref to grab the form value
    const formValues = this._form.getValue();
    console.log(formValues);

    return fetch('https://mspnapi.dolehesten.org/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        uid: formValues.email,
        pwd: formValues.password
      })
    }).then((response) => response.json()).then((data)=>console.log(data.token)).catch((error) => {
      console.log(error);
    })
  }

    render() {
        return(
          <ScrollView >
            <Header />
            <View>
            <View style={styles.container}>
            <View>
                <Button
                  title="with Facebook"
                  color="blue"
                />
            </View>
            <View>
            </View>
            <View style={{marginTop:20, marginBottom:10}}>
                <Button
                  title="with Google"
                  color="lightblue"
                />
                <Text style={{marginTop: 20, marginBottom:10,  textAlign: 'center',}}>OR</Text>
            </View>
                <Form 
                  type={User}
                  ref={c => this._form = c} 
                />
                
                <Button 
                  title="Login"
                  onPress={this.handler}
                  />
            </View>
            </View>
          </ScrollView>
        )
    }
};

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 50,
      padding: 20,
      backgroundColor: '#ffffff',
    },
    button: {
      padding:20,
      backgroundColor: 'blue'
    }
  });
// export this 
export default Login;