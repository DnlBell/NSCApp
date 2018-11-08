import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import styles from '../styles/LabledInput.js';

class LabeledInput extends Component {

  render() {
    const { label, value, ...props } = this.props;
    

    return (
      <View style={styles.frame}>
        <Text style={styles.labelStyle}>
          {label}
        </Text>
        <TextInput
          {...props}
          style={styles.inputText}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          blurOnSubmit
        />
      </View>
    );
  }
};



export default LabeledInput;