import * as React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Switch, Route, Redirect, Router } from 'react-router';
import { NativeRouter, Link } from 'react-router-native';

import Profile from './screens/Profile.js';
import Search from './screens/Search.js';
import Landing from './screens/Landing.js';
import Course from './screens/Course.js';
import Cart from './screens/Cart.js';
import Filter from './screens/Filter.js';
import Purchase from './screens/Filter.js';
import Login from './screens/Login.js';
import Results from './screens/Results.js';

/**
 * This stores the root mapping for the entire project. When adding a new page
 * add it to the route list here.
 */
export default class App extends React.Component {
  
  render() {
    return (
      <NativeRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/course" component={Course} />
                <Route path="/search" component={Search} />
                <Route path="/results" component={Results} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
                <Route path="/cart" component={Cart} />
                <Route path="/purchase" component={Purchase} />
                <Route path="/filter" component={Filter} />
            </Switch>          
      </NativeRouter>
    )
  }
}

