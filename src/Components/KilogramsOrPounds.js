import React, { useState, useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'

//compoent
import ToggleSwitchComponent from './ReusableComponents/ToggleSwitchComponent'
import LabelAndTextInputComponent from './ReusableComponents/LabelAndTextInputComponent'
import { VitalsContext } from '../Context/Vitals'

//config
import { Colors } from "../Configuration/Colors"

const KilogramsOrPounds = () => {

    const { kilograms, setKilograms, pounds, setPounds } = useContext(VitalsContext)

    const [toggleKilograms, setToggleKilograms] = useState(true)

    return (
        <View style={{alignItems: "center"}}>
             <ToggleSwitchComponent
                   onPress={()=> {
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
                containerStyle={{backgroundColor: kilograms !== null ? Colors.green : Colors.silver}}
            
            
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
                containerStyle={{backgroundColor: kilograms !== null ? Colors.green : Colors.silver}}
                />
              }
        </View>
    )
}

export default KilogramsOrPounds

const styles = StyleSheet.create({})
