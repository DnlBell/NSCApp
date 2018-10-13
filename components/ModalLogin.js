import React from 'react';
import { Modal, View, Text, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';

class ModalLogin extends React.Component {

    render() {
        return(
          <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.loginVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.props.closeLogin();
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        )
    }
}

function mapStateToProps(state) {
  return {
      loginVisible: state.loginVisible
  }
}

function mapDispatchToProps(dispatch) {
    return {
      closeLogin : () => dispatch({type:'CLOSE_LOGIN'})
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ModalLogin)