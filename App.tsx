import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StripeScreen from './Component/StripeScreen';


class MyClassComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
       <StripeScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MyClassComponent;