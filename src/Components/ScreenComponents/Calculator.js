import React, {useState} from 'react'
import {Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'

// import { Picker } from "@react-native-picker/picker"
import RNPickerSelect from "react-native-picker-select";

import DropDownPicker from 'react-native-dropdown-picker';

import LabelAndTextInputComponent from '../ReusableComponents/LabelAndTextInputComponent';
import HeaderTitle from '../ReusableComponents/HeaderTitle';
import ToggleSwitchComponent from '../ReusableComponents/ToggleSwitchComponent';
import ButtonComponent from '../ReusableComponents/ButtonComponent';
import ResultsComponent from '../ReusableComponents/ResultsComponent';

const Calculator = () => {
  
    const [results, setResults] = useState(false)
    const [dose, setDose] = useState(null)   

    const [frequency, setFrequency]=useState(null)


    const [kilograms, setKilograms]=useState(null)
    const [pounds, setPounds]=useState(null)
    const [toggleKilograms, setToggleKilograms] = useState(true)

    const [toggleConcentration, settoggleConcentration]=useState(true)

    const kilogramsOrPoundsUnitDisplay = toggleKilograms ?  "kg" :"pounds"



    const handleCalculation = ()=>{

        if(toggleKilograms){
          setKilograms(kilograms)
        } else {
          console.log("pounds");
          const kg =( pounds/2.2).toFixed(2)
          setPounds(kg)
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
    }

    //
    const disabled = kilograms === null && dose === null && frequency === null
console.log({kilograms, pounds});
    return (
        <View style={styles.container}>
              <HeaderTitle>Pediatric Dosing Calculator</HeaderTitle>



                  <View style={{display: results == true ? "none" : ""}}>
                  <ToggleSwitchComponent
                   onPress={()=> {
                 console.log("togg")
                 setKilograms(null)
                 setPounds(null)
                 setToggleKilograms(!toggleKilograms)
                }}
                labelLeft="kg"
                labelRight="pounds"
              />
            
              {
                toggleKilograms ?
                <LabelAndTextInputComponent
                label="Weight"
                unit={"kg"}
                value={kilograms}
                placeholder={"kg"}
                onChangeText={weight=>{
                  setKilograms(weight)
                }}
                keyboardType="numeric"
                onFocus={()=>setKilograms(null)}
                /> :

                <LabelAndTextInputComponent
                label="Weight"
                unit={"pounds"}
                value={pounds}
                placeholder={"pounds"}
                onChangeText={weight=>{
                  setPounds(weight)
                }}
                keyboardType="numeric"
                onFocus={()=>setPounds(null)}
                />
              }

              <ToggleSwitchComponent
                onPress={()=>settoggleConcentration(!toggleConcentration)}
                labelLeft="tablet"
                labelRight="liquid"
              />
            {
              toggleConcentration ?
              <LabelAndTextInputComponent
              label="Dose"
              unit="mg/kg"
              value={dose}
              placeholder="dose"
              onChangeText={dose=>setDose(dose)}
              keyboardType="number-pad"
              onFocus={()=>setDose(null)
              }
              /> :
              <LabelAndTextInputComponent
              label="Concentration"
              unit="mg/ml"
              value={dose}
              placeholder="dose"
              onChangeText={dose=>setDose(dose)}
              keyboardType="number-pad"
              onFocus={()=>setDose(null)
              }
              />
            }

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
                  />

                  </View>

                  <ButtonComponent 
                    title={results ? "Clear" : "Calculate"}
                    onPress={results ? handleClear : handleCalculation}
                    disabled={disabled}
                  />
               
                 { 
                   results  ? 
                   <View >
                     <ResultsComponent
                        label="Dosage"
                        result=  {
                          toggleKilograms ?
                          `${((kilograms*dose)/(24/frequency)).toFixed(1)} mg`:
                          `${((pounds*dose)/(24/frequency)).toFixed(1)} mg`
                        } 
                          
                        unit={"mg"}
                     />
                      <ResultsComponent
                        label="Administer"
                        result={`every ${frequency} hours`}
                        
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
