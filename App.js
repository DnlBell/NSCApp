import * as React from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { NativeRouter, Link } from 'react-router-native'
import { Navigation, Card, Tabs, Tab, BottomNavigation } from 'react-router-navigation'
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Search from './components/Search.js'
import Landing from './components/Landing.js'

const PRIMARY_COLOR = 'rgb(226, 68, 68)'
const SECONDARY_COLOR = 'rgb(226, 144, 68)'

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    padding: 18,
  },
  tabs: {
    backgroundColor: PRIMARY_COLOR,
  },
  tab: {
    paddingTop: 10,
    opacity: 10,
  },
  indicator: {
    backgroundColor: 'white',
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: -8,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3,
  },
  strong: {
    fontWeight: '700',
    marginBottom: 10,
  },
})

export default class App extends React.Component {
  state = {
    navigation: {},
    card: {},
  }




  renderThirdCard = contextRouter => {
    const { location, match } = contextRouter
    return (
      <Switch location={location}>
        <Route
          exact
          path={match.url}
          render={() => <Redirect to={`${match.url}/home`} />}
        />
        <Route
          render={() => (
            <BottomNavigation
              style={styles.container}
              tabBarStyle={styles.tabs}
              tabBarIndicatorStyle={styles.indicator}
            >
              <Tab
                path={`${match.url}/home`}
                label="Home"
                component={Landing}
              />
              <Tab
                path={`${match.url}/profile`}
                label="Profile"
                component={Profile}
              />
              <Tab
                path={`${match.url}/search`}
                label="Search"
                component={Search}
              />
            </BottomNavigation>
          )}
        />
      </Switch>
    )
  }


  render() {
    const { navigation, card } = this.state
    return (
      <NativeRouter>
        <React.Fragment>
          <StatusBar barStyle={navigation.barStyle} />
          <Navigation
            navBarStyle={navigation.navBarStyle}
            titleStyle={navigation.titleStyle}
            backButtonTintColor={navigation.backButtonTintColor}
          >
            <Card exact path="/" title="MindSpand" render={this.renderThirdCard} />
          </Navigation>
        </React.Fragment>
      </NativeRouter>
    )
  }
}