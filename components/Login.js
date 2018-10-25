import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Button } from 'react-native';
import formModel from 'tcomb-form-native';
import { Navigation } from 'react-navigation';
import Profile from './Profile';
import { StackNavigator, NavigationActions } from 'react-navigation';

const profile = StackNavigator({
  Profile: { screen: Profile }
});

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
  // handle form submission
  handler() {
    // using the ref to grab the form value
    const formValues = this._form.getValue();
    var isEmpty = (formValues || []).length === 0;

    if (isEmpty) {
      alert("Please enter email and password");
    } else {
      alert("You've just signed in!");
    }

  }

    render() {
     return(
          <View style={{marginTop: 5}}>
            <View style={styles.container}>
            <Text style={{paddingBottom:20}}>Sign in</Text>
            <View>
                <Button
                  title="with Facebook"
                  color="blue"
                />
            </View>
            <View>
            </View>
            <View style={{marginBottom:10}}>
                <Button
                  title="with Google"
                  color=""
                />
                <Text style={{marginBottom:2,  textAlign: 'center',}}>OR</Text>
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

        )
    }
};

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      marginTop: 5,
      padding: 20
    },
    button: {
      padding:20
    }
  });
// export this 
export default Login;