import React from 'react';

import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

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
          <MenuItem onPress={this.hideMenu}>Home</MenuItem>
          <MenuItem onPress={this.hideMenu}>Login</MenuItem>
          <MenuItem onPress={this.hideMenu}>Register</MenuItem>
          <MenuDivider />
        </Menu>
      </View>
    );
  }
}

export default DropMenu;