import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CalculatorButton = ({ title, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
});

export default CalculatorButton;
