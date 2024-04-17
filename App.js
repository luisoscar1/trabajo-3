import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ParteSuperior from './ParteSuperior';
import Contenedor from './contenedor';

export default function App() {
  return (


    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://p4.wallpaperbetter.com/wallpaper/503/189/157/pokemon-video-games-pixel-art-pixels-wallpaper-preview.jpg' }}
        style={styles.background}
      ></ImageBackground>
      <ParteSuperior />
      <Contenedor />
      <View style={styles.container}>
        <Text style={styles.texto}>PROFESOR NO SE QUE PASA PERO NO ME DEJA HACER NADA POR EL Finder
        NO SE SI ESTOY SALTANDOME ALGO PERO YA NO ME FUNCION SI MELLEGO A FUNCIONAR PERO CUANDO
        IMPLENEBTER LO DE FINDER SE MURIO EL SISTEMA Y ESO QUE ESTABA BONITO</Text>
      </View>

      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // O 'stretch' para estirar la imagen para llenar el espacio
    justifyContent: 'center', // Centrar los elementos en el contenedor
    width: 395,
    height: 810,
  },
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
