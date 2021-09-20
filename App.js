
import React, {Component, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ModalComponent from './src/Components/ReusableComponents/ModalComponent';

// component
import Calculator from './src/Components/ScreenComponents/Calculator';


export default function App() {

  return (
    <View style={styles.container} >
     <ModalComponent 
        animationType="" 
        transparent={false} 
        >
      <Calculator/>
     </ModalComponent>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: "center"
  
  },
});
