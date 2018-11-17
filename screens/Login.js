import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Dimensions, TextInput } from "react-native";
import { withRouter } from 'react-router-native';
import {Redirect} from 'react-router-native';
import t from 'tcomb-form-native';
import { connect } from 'react-redux';
import User from 'mspnmodel/src/user/user';

import Header from '../components/Header';
import Footer from'../components/Footer.js';
import {fetchLogin} from '../actions/authActions';

import styles from'../styles/Login.js';

    // this links Searcher props to redux store
    const mapStateToProps = (state) => (
      {
          userInfo: state.authReducer.authUser,
      }
  );
  
      // this links Searcher functions to the dispatcher so we can call sagas.
  const mapDispatchToProps = dispatch => (
      {
          onSubmit: (userInfo, history) => {
              console.log(userInfo);
              dispatch(fetchLogin(userInfo));    // call to the saga via action
              history.push("/profile");           // push to new component on completion
          },
      }
  );

var width = Dimensions.get('window').width - 18;
// set up the form model
const Form = t.form.Form;

/* define the User model
const User = t.struct({
  email: t.String,
  password: t.String,
});*/

const options = {
  auto: 'placeholders',
  fields: {
    pwd: {
      password: true,
      secureTextEntry: true,
    },
    uid: {
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
      uid: "",
      pwd: '',
    };

    this.onPressLogin = this.onPressLogin.bind(this);
    this.onChangeUid = this.onChangeUid.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onPressLogin() {
    const newUser = new User(this.state.uid, this.state.pwd); // might not work! 
    newUser.copy(this.props.uid);
    newUser.copy(this.props.pwd);
    this.props.onSubmit(newUser, this.props.history);
  }

  onChangeUid(uid) {
    console.log('uid', uid);
    this.setState({uid});
}

onChangePassword(pwd) {
    console.log('password', pwd);
    this.setState({pwd})
}

    render() {
      
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
                <TextInput 
                  style={styles.inputText}
                  placeholder="E-mail"
                  value={this.state.uid}
                  onChangeText={this.onChangeUid}
                />
                <TextInput 
                  style={styles.inputText}
                  placeholder="Password"
                  value={this.state.pwd}
                  onChangeText={this.onChangePassword}
                />
                <Button 
                  title="Login"
                  onPress={this.onPressLogin}
                  />
              </View>
            </ScrollView>
            <Footer />
          </View>
        )
    }
};


// export this 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
