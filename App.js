import * as React from 'react';
import { Switch, Route } from 'react-router';
import { NativeRouter } from 'react-router-native';


import Dummy from './components/Dummy/Dummy';
import Profile from './components/Profile.js';
import Search from './components/Search.js';
import Landing from './components/Landing.js';
import CoursePage from './components/CoursePage';
import Results from './components/Results';


export default class App extends React.Component {
  
  render() {
    return (
      <NativeRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={Search} />
                <Route path="/course" component={CoursePage} />
                <Route path="/cart" component={Dummy} />
                <Route path="/cart/purchaseConfirm" component={Dummy} />

                <Route path="/login" component={Dummy} />
                <Route path="/profile" component={Dummy} />

                <Route path="/about" component={Profile} />
                <Route path="/contact" component={Dummy} />
            </Switch>          
      </NativeRouter>
    )
  };
};

