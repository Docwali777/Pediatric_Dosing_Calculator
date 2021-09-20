import React, { useState } from 'react'
import { StyleSheet, Text, View, Pres, Pressable, TouchableOpacity } from 'react-native'
import LabelComponent from './LabelComponent'

//colors
import { Colors } from "../../Configuration/Colors"

const ToggleSwitchComponent = ({labelLeft, labelRight, onPress}) => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = ()=>{
        setToggle(!toggle)
        onPress()
    }
    return (
       <View style={styles.container}>
               <LabelComponent label={labelLeft} />
            <TouchableOpacity onPress={handleToggle} style={styles.toggleContainer}>
            
           
                    <View style={[styles.indicator, {left: toggle ? 17 : 0}]} />

            </TouchableOpacity>
                <LabelComponent label={labelRight} />
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        width: 260, 

    },
    toggleContainer: {
        borderWidth: 3, 
        borderColor: Colors.gray || "gray",
        height: 20, 
        width: 40, 
        borderRadius: 10, 
    }, 
    indicator:{
        height: 14, 
        width: 17, 
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1, 
        backgroundColor: Colors.aquaMarineGreen || "green"
    }
})

export default ToggleSwitchComponent

