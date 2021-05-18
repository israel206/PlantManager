import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';


import colors from '../styles/colors';
import fonts from '../styles/fonts';


// // criando propriedade
// interface ButtonProps extends TouchableOpacityProps {
//   title: string;
// }
export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        Confirmar
      </Text>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    // width: 56,
    // paddingHorizontal: 10
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading
  }
});
