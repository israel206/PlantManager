import React from 'react';

import { StyleSheet, View } from 'react-native';

import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json';

export function Load() {
  return (
    <View style={styles.container}>
      <LottieView source={loadAnimation} autoPlay loop style={styles.animation} />
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  animation: {
    
  }
})