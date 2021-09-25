import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'

import { Colors } from "../Configuration/Colors" 
import { VitalsContext } from '../Context/Vitals'

import LabelAndTextInputComponent from './ReusableComponents/LabelAndTextInputComponent'

const MedicationConcentrationComponent = () => {

    const { concentration, setConcentration, dose , setDose} = useContext(VitalsContext)

const content = concentration.ml !== null & concentration.mg !== null 

    return (
        <View>
             <LabelAndTextInputComponent
              label="Dose"
              unit="mg/kg/day"
              value={dose}
              placeholder="dose"
              onChangeText={dose=>setDose(dose)}
              keyboardType="number-pad"
              onFocus={()=>setDose(null)
              }
              containerStyle={{backgroundColor: dose !== null ? Colors.blue : Colors.gray}}
              />
        <View style={styles.container}>
            
        <View style={[styles.labelContainer, {backgroundColor: content ? Colors.red : Colors.gray }]}>
        <Text style={styles.labelText} >Concentration</Text>
        </View>

      
      <View style={{flexDirection: "row"}}>

      <View style={[styles.dataContainer]}>

     

        <TextInput 
            style={styles.textIput}
            textAlign="center"
            value={concentration.mg}
            keyboardType="number-pad"
            placeholder={"mg"}
            onChangeText={mg=> setConcentration(prev=> ({...prev, mg}))}
            onFocus={()=>{
                setConcentration(prev =>({...prev, mg: null}))
            }}
            placeholderTextColor="#808080"

            />
            <Text style={styles.unitText} >mg</Text>
      </View>


        <View style={[styles.dataContainer, {width: 90}]}>
        <Text style={styles.unitText} >/</Text>
        <TextInput 
        style={[styles.textIput, {width: 40}]}
        textAlign="center"
        value={concentration.ml}
        keyboardType="number-pad"
        placeholder={"ml"}
        onChangeText={ml=> setConcentration(prev=> ({...prev, ml}))}
        onFocus={()=>{
            setConcentration(prev =>({...prev, ml: null}))
        }}
        placeholderTextColor="#808080"
        />
          <Text style={styles.unitText} >ml</Text>
        </View>
     
      </View>

    </View>

    </View>
    )
}

export default MedicationConcentrationComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20, 
        borderWidth: 1, 
        borderColor: Colors.silver
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
    dataContainer: {
        width: 100, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-evenly", 
 
    }, 
    textIput: {
        fontSize: 20,
        // borderWidth: 1, 
        width: "72%", 
        height: "100%"
    },
    unitText: {
        fontSize: 20,
    }
})
