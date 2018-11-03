import React, {Component} from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Button } from 'react-native';

import formModel from 'tcomb-form-native';


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
    console.log(formValues);
  }

    render() {
        return(
          <View style={{marginTop: 22}}>
         
            <View>
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

              <TouchableHighlight
                onPress={() => {
                  this.props.closeLogin();
                }}>
               <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
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