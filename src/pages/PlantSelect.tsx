import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { EnvironmentButton } from '../components/EnvironmentButton';

import { Header } from '../components/Header';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function PlantSelect() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
            você quer colocar sua planta?
        </Text>
      </View>

      <View>
        <FlatList
          // vetor data
          data={[1, 2, 3, 4, 5]}
          // função anônimar
          renderItem={({item}) => (
            <EnvironmentButton title="Cozinha" active />
          )} horizontal />
      </View>
     

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 20,
  }
});
