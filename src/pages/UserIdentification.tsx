
import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function UserIdentification() {

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();
  
  // fazendo a navegação de páginas
  const navigation = useNavigation();

  //mudança de coloração do input
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  //continuar com a coloração do input com a string
  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }
  //'função', chamando a próxima tela
  function handleSubmit() {
    navigation.navigate('Confirmation');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>

                <Text style={styles.emoji}>
                  { isFilled ? '🙂😄' : '😃😁' }
                </Text>

                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>

              </View>

              <TextInput style={[styles.input, (isFocused || isFilled) && { borderColor: colors.green }]} placeholder="Digite um nome"
                onBlur={handleInputBlur} onFocus={handleInputFocus} onChangeText={handleInputChange} />

              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
              </View>

            </View>
          </View>

        </TouchableWithoutFeedback>
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center'
  },
  emoji: {
    fontSize: 44
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    width: '100%',
    color: colors.heading,
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 20
  }

});