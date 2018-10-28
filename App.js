import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Switch, Route, Redirect, Router } from 'react-router';
import { NativeRouter, Link } from 'react-router-native';

import Home from './components/Home.js';
import Profile from './components/Profile.js';
import Search from './components/Search.js';
import Landing from './components/Landing.js';
import CoursePage from './components/CoursePage';


export default class App extends React.Component {
  
  render() {
    return (
      <NativeRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/course" component={CoursePage} />
                <Route path="/search" component={Search} />
                <Route path="/profile" component={Profile} />
            </Switch>          
      </NativeRouter>
    )
  }
}

