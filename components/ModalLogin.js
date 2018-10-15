import React, {Component} from 'react';
import { Modal, View, Text, TouchableHighlight, StyleSheet, Button } from 'react-native';
import {connect} from 'react-redux';

import formModel from 'tcomb-form-native';


// set up the form model
const Form = formModel.form.Form;

// define the User model
const User = formModel.struct({
  email: formModel.String,
  password: formModel.String,
});

class ModalLogin extends Component {
  // handle form submission
  handler() {
    // using the ref to grab the form value
    const formValues = this._form.getValue();
    console.log('value', formValues);
  }

    render() {
        return(
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.loginVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
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
        </Modal>
        )
    }
}

function mapStateToProps(state) {
  return {
      loginVisible: state.loginVisible
  }
}
// dispatch action
function mapDispatchToProps(dispatch) {
    return {
      closeLogin : () => dispatch({type:'CLOSE_LOGIN'})
    }
  }
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
export default connect(mapStateToProps,mapDispatchToProps)(ModalLogin)