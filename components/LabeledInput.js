import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

class LabeledInput extends Component {

  render() {
    const { label, value, ...props } = this.props;
    const labelStyle = {
      position: 'absolute',
      left: 10,
      top: 0,
      fontSize: 14,
      color: '#000'
    };

    return (
      <View style={{ paddingTop: 18, marginTop: 18 }}>
        <Text style={labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={{ height: 32, fontSize: 20, color: '#000', borderBottomWidth: 1, borderBottomColor: '#555', marginHorizontal: 10 }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
}

const styles = {
  
  inputText: {
    backgroundColor: '#fff',
    marginBottom: 8,
    flex: .9,
    padding: 18,
    color: '#000', 
    borderBottomWidth: 1, 
    borderBottomColor: '#555'
  }
}

export default LabeledInput;