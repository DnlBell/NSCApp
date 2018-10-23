import * as React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { Switch, Route, Redirect } from 'react-router'
import { NativeRouter } from 'react-router-native'
import { Navigation, Card, Tab, BottomNavigation } from 'react-router-navigation'
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Search from './components/Search.js'
import Landing from './components/Landing.js'

const styles = StyleSheet.create({
  tab: {
    paddingTop: 10,
    opacity: 10,
  }
})

export default class App extends React.Component {
  state = {
    navigation: {},
    card: {},
  }

  renderTabs = contextRouter => {
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
            <Card exact path="/" title="MindSpand" render={this.renderTabs} />
          </Navigation>
        </React.Fragment>
      </NativeRouter>
    )
  }
}