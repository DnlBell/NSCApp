import React from 'react';
import { Modal, View, Text } from 'react-native';
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
                  this.setModalVisible(!this.props.loginVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
      closeModalLogin : () => dispatch({type:'MODAL_LOGIN_CLOSE'})
    }
  }
  

function mapStateToProps(state) {
        return {
            loginVisible: state.loginVisible
        }
}

export default connect(mapStateToProps)(ModalLogin)