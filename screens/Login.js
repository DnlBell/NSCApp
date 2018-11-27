import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Dimensions } from "react-native";
import { withRouter } from 'react-router-native';
import {Redirect} from 'react-router-native';
import formModel from 'tcomb-form-native';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from'../components/Footer.js';

import styles from'../styles/Login.js';

import { loginSubmit } from '../actions/authActions';
import Users from 'mspnmodel/distribution/user/user';


var width = Dimensions.get('window').width - 18;
// set up the form model
const Form = formModel.form.Form;


// define the User model
const TUser = formModel.struct({
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
      email:'',
      password:''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(userInfo) {
    const user = new Users(); // might not work! 
    console.log(user)
    user.copy(user.userInfo);
    this.props.login(this.props.user, this.props.history);
    // EMPTY object 
  //console.log(user)
  }

  // handler used to be here
    render() {
      // default value for TESTING ONLY
      this.createValue = {'email': 'Leydth@gmail.com', 'password': 'Password'}

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
                  type={TUser}
                  ref={c => this._form = c}
                  options={options} 
                  value={this.createValue}
                />
                <Button 
                  title="Login"
                  onPress={this.onSubmit}
                  />
              </View>
            </ScrollView>
            <Footer />
          </View>
        )
    }
};



    // this links Searcher props to redux store
    const mapStateToProps = (state) => (
      {
          userInfo: state.authReducer.userInfo,
      }
  );
  
      // this links Searcher functions to the dispatcher so we can call sagas.
  const mapDispatchToProps = dispatch => (
      {
          login: (userInfo, history) => {
              dispatch(loginSubmit(userInfo));    // call to the saga via action
              history.push("/profile");           // push to new component on completion
              console.log(userInfo)
          
            },
      }
  );
// export this 
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
