
import React, {Component, useState } from 'react';
import { Button, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import ModalComponent from './src/Components/ReusableComponents/ModalComponent';

// component
import Calculator from './src/Components/ScreenComponents/Calculator';

//context
import { VitalsProvider } from './src/Context/Vitals';

export default function App() {
const { width } = useWindowDimensions()

const tabletStyle = {
  display: width > 500 ? "" : "none",
  height: 18,
  backgroundColor: "#778899",
  width: 40, 
  marginTop: 3, 
  borderRadius: 30
}
  return (

    <VitalsProvider>
   
          <View style={styles.container} >
          <View  style={tabletStyle}/>
     <ModalComponent 
        animationType="" 
        transparent={false} 
        >
      <Calculator/>
     </ModalComponent>

    </View>
    </VitalsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      // justifyContent: "center", 
      // alignItems: "center"
  
  },
});
