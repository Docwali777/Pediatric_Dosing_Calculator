import React, {useEffect,  useState, useContext} from 'react'
import {Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'

//context
import { VitalsContext } from '../../Context/Vitals';

// import { Picker } from "@react-native-picker/picker"
import RNPickerSelect from "react-native-picker-select";

import DropDownPicker from 'react-native-dropdown-picker';

import LabelAndTextInputComponent from '../ReusableComponents/LabelAndTextInputComponent';
import HeaderTitle from '../ReusableComponents/HeaderTitle';
import ToggleSwitchComponent from '../ReusableComponents/ToggleSwitchComponent';
import ButtonComponent from '../ReusableComponents/ButtonComponent';
import ResultsComponent from '../ReusableComponents/ResultsComponent';

import KilogramsOrPounds from '../KilogramsOrPounds';
import TabletOrLiquidComponent from '../TabletOrLiquidComponent';
import  {Colors}  from "../../Configuration/Colors"


const Calculator = () => {
  
    const {dose, setDose, kilograms, setKilograms, pounds, setPounds, concentration, setConcentration } = useContext(VitalsContext)
    const [weight, setWeight] = useState(null)
    const [results, setResults] = useState(null)
    const [frequency, setFrequency]=useState(null)

    const [calculatedDosage, setCalculatedDosage] = useState(null)


    useEffect(()=>{
      if(weight){
        calculateTabletDosing(weight)
      }
    }, [weight])

    const calculateTabletDosing = ()=>{
   
      if(concentration.mg === null){
     
        const w = ((weight*dose)/(24/frequency)).toFixed()
         return  setCalculatedDosage(`${w} mg`)
      } else {
 

        var volume = ((weight * dose) /(concentration.mg/concentration.ml))/(24/frequency)
      
      return   setCalculatedDosage(`${volume.toFixed(1)} ml   ( ${((weight * dose)/(24/frequency)).toFixed()} mg )`)

      }
    }

    const handleCalculation = ()=>{
        if(kilograms){
          setWeight(kilograms)
        } else {
          const kg = (pounds/2.2)
          setWeight(kg)
        }

  
        Keyboard.dismiss()
   setResults(!results)

  
    }

    const handleClear = ()=>{
      setKilograms(null)
      setPounds(null)
      setFrequency(null)
      setDose(null)
      setResults(!results)
      setConcentration(prev =>({mg: null, ml: null}))
      setWeight(null)
      setCalculatedDosage(null)
      
    }

    //
    const disabled =  dose == null || frequency === null 

  
    return (
        <View style={styles.container}>
              <HeaderTitle>Pediatric Dosing Calculator</HeaderTitle>



                  <View style={{display: results == true ? "none" : ""}}>

                  <KilogramsOrPounds />

                  <TabletOrLiquidComponent />
            

              <LabelAndTextInputComponent
                  label="Frequency"
                  unit="hours"
                  value={frequency}
                  placeholder="inteval"
                  onChangeText={frequency=>setFrequency(frequency)}
                  keyboardType="number-pad"
                  onFocus={()=>{
                    setFrequency(null)
                  }}
                  containerStyle={{backgroundColor: frequency !== null ? Colors.lightPurple : Colors.gray}}
                  />

                  </View>

                  <ButtonComponent 
                    title={results ? "Clear" : "Calculate"}
                    onPress={results ? handleClear : handleCalculation}
                    disabled={disabled}
                    buttonStyle={{backgroundColor: disabled ? "gray" : "purple", marginBottom: 40}}
                  />
               
                 { 
                   results  ? 
                   <View >
                     <ResultsComponent
                        label="Dosage"
                        result=  {calculatedDosage} 
                        customContainerBackground={{backgroundColor: Colors.blue}}
                        unit={"mg"}
                     />
                      <ResultsComponent
                        label="Administer"
                        result={`every ${frequency} hours`}
                        customContainerBackground={{backgroundColor: Colors.aquaMarineGreen}}
                        
                     />
                       
                        
                     </View> :
                     null
                 }


        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    // justifyContent: "center",
    // height: 100
  },
  resultsContainer:{
    // flexDirection: "row", 
    justifyContent: "space-evenly", 
    alignItems: "center", 
    // justifyContent: "center",
    height: 40, 
    width: "80%",
    borderWidth:1
  }

})
