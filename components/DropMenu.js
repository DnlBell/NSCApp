import React from 'react';
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {connect} from 'react-redux';

class DropMenu extends React.PureComponent {
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
    alert('{this.props.loginVisible}')
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
      <View style={{  flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingTop:30,
        paddingLeft:15
         }}>
        <Menu
          ref={this.setMenuRef}
          button={<Text onPress={this.showMenu} >Mindspand</Text>}
        >
          <MenuItem onPress={this.home}>Home</MenuItem>
          <MenuItem onPress={this.login}>Login</MenuItem>
          <MenuItem onPress={this.register}>Register</MenuItem>
          <MenuDivider />
        </Menu>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    loginVisible:state.loginVisible
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showLogin: () => dispatch({type:'LOGIN_OPEN'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DropMenu);