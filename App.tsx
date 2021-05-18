import React from 'react';
import AppLoading from 'expo-app-loading';


// import Welcome from './src/pages/Welcome';
// import { UserIdentification } from './src/pages/UserIdentification';
import { Confirmation } from './src/pages/Confirmation';

import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';



// Tela de redirecionamento de páginas
export default function App() {

  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Confirmation />
  );
}


