import * as React from 'react';
import { Switch, Route } from 'react-router';
import { NativeRouter, AndroidBackButton} from 'react-router-native';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import Profile from './screens/Profile.js';
import Search from './screens/Search.js';
import Landing from './screens/Landing.js';
import CoursePage from './screens/Course.js';
import Cart from './screens/Cart.js';
import Filter from './screens/Filter.js';
import Purchase from './screens/Filter.js';
import Login from './screens/Login.js';
import Results from './screens/Results.js';

const store = configureStore({});


/**
 * This stores the root mapping for the entire project. When adding a new page
 * add it to the route list here.
 */
export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <NativeRouter>
            <AndroidBackButton>
                  <Switch>
                      <Route exact path="/" component={Landing} />
                      <Route path="/course" component={CoursePage} />
                      <Route testID='search' path="/search" component={Search} />
                      <Route path="/results" component={Results} />
                      <Route path="/profile" component={Profile} />
                      <Route path="/login" component={Login} />
                      <Route path="/cart" component={Cart} />
                      <Route path="/purchase" component={Purchase} />
                      <Route path="/filter" component={Filter} />
                  </Switch>
            </AndroidBackButton>
          </NativeRouter>
        </Provider>
    )
  }
}