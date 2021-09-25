import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View , TextInput} from 'react-native'

import ToggleSwitchComponent from './ReusableComponents/ToggleSwitchComponent'
import LabelAndTextInputComponent from './ReusableComponents/LabelAndTextInputComponent'
import { VitalsContext } from '../Context/Vitals'

//config
import { Colors } from "../Configuration/Colors"
import MedicationConcentrationComponent from './MedicationConcentrationComponent'

const TabletOrLiquidComponent = () => {

    //context
    const { dose, setDose, concentration, setConcentration } = useContext(VitalsContext)

    const [toggleConcentration, settoggleConcentration]=useState(true)


    const handleToggle = ()=>{
        settoggleConcentration(!toggleConcentration)
        setConcentration(prev =>({...prev, mg: null}))
        setDose(null)
    }
    return (
        <View style={{alignItems: "center"}}>
              <ToggleSwitchComponent
                onPress={handleToggle}
                labelLeft="tablet"
                labelRight="liquid"
              />
            {
              toggleConcentration ?
              <LabelAndTextInputComponent
              label="Dose"
              unit="mg/kg/day"
              value={dose}
              placeholder="dose"
              onChangeText={dose=>setDose(dose)}
              keyboardType="number-pad"
              onFocus={()=>setDose(null)}
              containerStyle={{backgroundColor: dose !== null ? Colors.blue : Colors.gray}}
              
              /> :

           
           <MedicationConcentrationComponent 

           />
              

         
            }
        </View>
    )
}

export default TabletOrLiquidComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
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
    milligramContainer: {
        width: 100, 
        flexDirection: "row", 
        borderWidth: 1, 
        alignItems: "center", 
        justifyContent: "space-evenly"
    }
})
