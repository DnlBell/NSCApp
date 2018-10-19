import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {connect} from 'react-redux';

class DropMenu extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  login = () => {
    this._menu.hide();
    this.props.showLogin();
  };

  home = () => {
    this._menu.hide();
    alert('you clicked home!');
  };

  register = () => {
    this._menu.hide();
    alert('you clicked register!');
  };

  render() {

    return (
      <View style={styles.container}>
        <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu} style={styles.text}>Mindspand</Text>}>
          <MenuItem onPress={this.home}>Home</MenuItem>
          <MenuItem onPress={this.login}>Login</MenuItem>
          <MenuItem onPress={this.register}>Register</MenuItem>
          <MenuDivider />
        </Menu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    paddingTop:40,
    paddingLeft:15
  },
  text:{
    fontSize:18,
    color:'#fff',
  }
})

function mapStateToProps(state){
  return {
    loginVisible:state.loginVisible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showLogin: () => dispatch({type:'OPEN_LOGIN'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropMenu);