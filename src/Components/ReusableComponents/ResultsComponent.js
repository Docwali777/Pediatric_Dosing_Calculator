import React from 'react'
import { StyleSheet, Text,TextInput, View } from 'react-native'

import {   Colors } from "../../Configuration/Colors"

const ResultsComponent = ({result, label,unit, customContainerBackground}) => {


    return (
       
            <View style={styles.container}>
                <View style={[styles.labelContainer, customContainerBackground]}>
                <Text style={styles.labelText} >{label}</Text>
                </View>
              
              <View style={styles.resultsContainer}>
                <Text style={styles.resultText} >{result}</Text>
           
              </View>

            
          
            </View>

    )
}

export default ResultsComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: "center",
        // marginLeft: 30,
        marginBottom: 20,
        borderColor: Colors.silver, 
        borderWidth: 1, 
        width: 342, 
        
    },
    frequencyText:{
        fontSize: 20
    },
    labelContainer:{
        width: 150,
        alignItems:"center",
        justifyContent: "center",
        // borderWidth:1,
        height: 40,
        backgroundColor: Colors.silver
        
        
    },
    labelText:{
        fontSize: 20,
        fontWeight: "600",
        color: Colors.powerderedSugar
    },

textIput: {
    // height: 40,
    fontSize: 18, 
    textAlign: "center", 
    width: "70%"
},
unitContainer:{
    backgroundColor: Colors.silver,
    height: 40,
    alignItems:"center",
    justifyContent: "center", 
    width: 90
},
unitText: {
    fontSize: 20,
    fontWeight: "600", 
    color: Colors.powerderedSugar
},    
resultsContainer: {
    height: 40,
    fontSize: 20,
    width: 100, 
    alignItems:"center",
    justifyContent: "center", 
    width: 190
    
   
},
resultText:{
    fontSize: 18, 
    fontWeight: "700"
}
// 
})
